// Zustand is a global state management tool that helps us update the state
// of the search and filter functionality

import { create } from "zustand";

export const useFilter = create((set, get) => ({
  searchData: {
    search: "",
    country: "",
    project_type: "",
    orderOfItems: "createdAt asc",
  },
  addSearch: (search) => {
    const prev = get().searchData;

    set({ searchData: { ...prev, ...search } });
  },
  addCountry: (country) => {
    const prev = get().searchData;

    set({ searchData: { ...prev, ...country } });
  },

  addProjectType: (project_type) => {
    const prev = get().searchData;

    set({ searchData: { ...prev, ...project_type } });
  },

  addOrderOfItems: (orderOfItems) => {
    const prev = get().searchData;
    set({ searchData: { ...prev, ...orderOfItems } });
  },

  removeFilter: () => {
    set({
      searchData: {
        search: "",
        country: "",
        project_type: "",
      },
    });
  },
}));
