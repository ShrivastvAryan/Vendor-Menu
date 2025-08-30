"use client";

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

const DeleteAlert = ({ onConfirm, isLoading }) => {
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
            This action cannot be undone. Your menu page will be permanently
            deleted.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-600 text-white hover:bg-red-700"
            disabled={isLoading}
            onClick={onConfirm}   // call parent action
          >
            {isLoading ? "Deleting..." : "Yes, delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteAlert;
