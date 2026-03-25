import { create } from 'zustand';

const useCartStore = create((set, get) => ({
    cart: [],
    addToCart: (product) => set((state) => {
        const existingItem = state.cart.find(item => item._id === product._id);
        if (existingItem) {
            return { cart: state.cart.map(item => item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item) };
        }
        else {
            return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }
    }),
    removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter(item => item._id !== productId)
    })),
    clearCart: () => set({ cart: [] }),

    getTotalPrice: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

}))


export default useCartStore;