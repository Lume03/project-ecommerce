import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';
import { ProductType } from "@/types/product";
import { toast } from 'sonner';

interface UseLovedProductsType {
    lovedItems: ProductType[];
    addLoveItem: (data: ProductType) => void;
    removeLovedItem: (id: number) => void;
}

export const useLovedProducts = create(persist<UseLovedProductsType>((set, get) => ({
    lovedItems: [],
    addLoveItem: (data: ProductType) => {
        const currentLovedItems = get().lovedItems;
        const existingItem = currentLovedItems.find((item) => item.id === data.id);

        if (existingItem) {
            // Corregido: usar string en lugar de objeto
            toast.error("El producto ya existe en la lista 💔");
            return;
        }

        set({
            lovedItems: [...get().lovedItems, data]
        });

        // Corregido: usar string en lugar de objeto
        toast.success("Producto añadido a la lista 🧡");
    },
    removeLovedItem: (id: number) => {
        set({ lovedItems: [...get().lovedItems.filter((item) => item.id !== id)] });
        // Corregido: usar string en lugar de objeto
        toast.success("Producto se ha eliminado de la lista ❤️‍🔥");
    }
}), {
    name: "loved-products-storage",
    storage: createJSONStorage(() => localStorage)
}));