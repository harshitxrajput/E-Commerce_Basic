import { create } from 'zustand';

export const useProductStore = create((set)=>({
    products: [],

    setProducts: (products) => set({ products }),

    createProduct: async (newProduct) => {
        if(!newProduct.name || !newProduct.price || !newProduct.image){
            return { success: false, message: "Please fill in all fields." }
        }

        const res = await fetch("/products/create", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(newProduct)
        });

        const data = await res.json();
        set((state) => ({ products: [...state.products, data.data]}))
        return { success: true, message: "Product created successfully" }
    },

    fetchProduct: async () => {
        const res = await fetch("/products/get", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        set({ products: data.data });
    },

    deleteProduct: async (pid) => {
        const res = await fetch(`/products/delete/${pid}`, {
            method: "DELETE"
        });
        const data = await res.json();

        if(!data.success) return { success: false, message: data.message };

        //update the ui immediately after deleting the product
        set(state => ({ products: state.products.filter(product => product._id != pid) }));
        return { success: true, message: data.message };
    },

    updateProduct: async (pid, updateProduct) => {
        const res = await fetch(`/products/update/${pid}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateProduct)
        });
        const data = await res.json();

        if(!data.success) return { success: false, message: data.message };
        
        await useProductStore.getState().fetchProduct();

        return { success: true, message: data.message };
    }
}))