import { createSlice } from "@reduxjs/toolkit";


const initialState = { open: false, notify: null }
const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal(state) {
            state.open = true;
        },
        closeModal(state) {
            state.open = false;
        },
        onNotify(state,action) { 
            state.notify = action.payload.id
        },
        offNotify(state) {
            state.notify = null;
        }
    }
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;