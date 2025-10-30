import { createSlice } from "@reduxjs/toolkit";


const initialState = { items: [] }
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            const updatedItems = [...state.items];

            const existingCartItemIndex = updatedItems.findIndex(
                (cartItem) => cartItem.productId === action.payload.id
            );
            const existingCartItem = updatedItems[existingCartItemIndex];

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    quantity: existingCartItem.quantity + 1,
                };
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                updatedItems.push({
                    productId: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                    quantity: 1,
                });
            }
            state.items = [...updatedItems]
        },
        updateItem(state, action) {
            const updatedItems = [...state.items];

            const updatedItemIndex = updatedItems.findIndex(
                (cartItem) => cartItem.productId === action.payload.id
            );

            const existingCartItem = updatedItems[updatedItemIndex];

            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + action.payload.amt,
            };
            if (updatedItem.quantity <= 0) {
                updatedItems.splice(updatedItemIndex, 1);
            } else {
                updatedItems[updatedItemIndex] = updatedItem;
            }

            state.items = updatedItems;

        },
        updateCart(state, action) {
            state.items = action.payload.items;
        }

    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;