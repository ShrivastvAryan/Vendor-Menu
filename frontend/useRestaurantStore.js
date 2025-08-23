import { create } from "zustand";
import api from "./Api/api";

const useRestaurantStore = create((set, get) => ({
  // Restaurant Info
  restaurant: {
    restaurantName: "",
    restaurantAddress: "",
    restaurantNumber: "",
  },

  // Menu Info
  sections: [{ sectionName: "", items: [] }],

  // ---------- Restaurant Actions ----------
  setRestaurantField: (field, value) =>
    set((state) => ({
      restaurant: {
        ...state.restaurant,
        [field]: value,
      },
    })),

  // ---------- Menu Actions ----------
  setSections: (sections) => set({ sections }),

  addSection: () => {
    const sections = [...get().sections, { sectionName: "", items: [] }];
    set({ sections });
  },

  deleteSection: (index) => {
    const sections = get().sections.filter((_, i) => i !== index);
    set({ sections });
  },

  updateSectionName: (index, value) => {
    const sections = [...get().sections];
    sections[index].sectionName = value;
    set({ sections });
  },

  addItem: (sectionIndex) => {
    const sections = [...get().sections];
    sections[sectionIndex].items.push({
      name: "",
      type: "Veg",
      prices: {
        quarter: 0,
        half: 0,
        full: 0,
      },
      description: "",
    });
    set({ sections });
  },

  updateItemField: (sectionIndex, itemIndex, field, value) => {
    const sections = [...get().sections];
    sections[sectionIndex].items[itemIndex][field] = value;
    set({ sections });
  },

  deleteItem: (sectionIndex, itemIndex) => {
    const sections = [...get().sections];
    sections[sectionIndex].items = sections[sectionIndex].items.filter(
      (_, i) => i !== itemIndex
    );
    set({ sections });
  },

  // ---------- Submit to Backend ----------
  submitData: async (token) => {
    try {
      const { restaurant, sections } = get();
      const response = await api.post(
        "/api/menu",
        {
          ...restaurant,
          sections,
        },
        {
          headers: { Authorization: `Bearer ${token}` }, 
        }
      );
      return response.data;
    } catch (err) {

      console.error("Error submitting data:", err);
      throw err;
    }
  },
}));

export default useRestaurantStore;
