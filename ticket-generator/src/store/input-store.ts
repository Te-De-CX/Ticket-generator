import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// Define the type for the store's state and actions
interface CounterState {
  name: string | null;
  github_name: string | null;
  email: string | null;
  image_src: string | null;
  setname: (name: string) => void;
  setgithub_name: (github_name: string) => void;
  setemail: (email: string) => void;
  setimage_src: (image_src: string) => void;
}

// Create the store with TypeScript types
const useStore = create<CounterState>()(
  devtools(
    persist(
      (set) => ({
        name: null,
        github_name: null,
        email: null,
        image_src: null,
        setname: (name) => {
          set({ name });
        },
        setgithub_name: (github_name) => {
          set({ github_name });
        },
        setemail: (email) => {
          set({ email });
        },
        setimage_src: (image_src) => {
          set({ image_src });
        },
      }),
      { name: "user-storage" } // Store it in the local storage with this name
    )
  )
);

export default useStore;