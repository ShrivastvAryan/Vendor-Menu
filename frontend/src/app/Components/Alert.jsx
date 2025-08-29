"use client";

import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "@clerk/nextjs";
import api from "../../../Api/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

// ✅ Fix: properly destructure props
const DeleteAlert = ({ _id }) => {
  const { getToken } = useAuth();
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const token = await getToken();
      const res = await api.delete(`/api/restaurant/mypage/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data; // backend response
    },
    onSuccess: (data) => {
      toast.success("Menu Deleted Successfully", { transition: Bounce });
      queryClient.invalidateQueries(["mypage"]); // refresh cache
    },
    onError: (err) => {
      console.error("Error deleting page:", err);
      toast.error("Error in deleting the Menu", { transition: Bounce });
    },
  });

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div
          className="px-6 py-4 text-lg sm:text-xl font-semibold rounded-xl 
          bg-[#FFDE21] text-black shadow-md 
          hover:scale-105 hover:shadow-lg hover:brightness-105 
          transition-all duration-200 cursor-pointer"
        >
          Delete Page
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. Your menu page will be permanently deleted.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-600 text-white hover:bg-red-700"
            disabled={deleteMutation.isLoading}
            onClick={() => deleteMutation.mutate(_id)} // ✅ use destructured _id
          >
            {deleteMutation.isLoading ? "Deleting..." : "Yes, delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteAlert;
