import axios from "axios";
import { cartActions } from "./cartSlice";
import { modalActions } from "./modalSlice";

const API = "http://localhost:3000/api"

export const addToCart = ({ id, name, price }) => {
    return async (dispatch) => {
        try {
            dispatch(modalActions.onNotify({ id }));
            const response = await axios.post(`${API}/cart/add`, { id, name, price }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log(response);
            dispatch(cartActions.addItem({ id, name, price }));

        } catch (error) {
            console.log("add to cart error", error);
        } finally {
            dispatch(modalActions.offNotify());
        }
    }
};

export const updatedCartItem = ({ id, amt }) => {
    return async (dispatch) => {
        try {
            dispatch(modalActions.onNotify({ id }));
            const response = await axios.patch(`${API}/cart/update/${id}`, { amt }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log(response);
            dispatch(cartActions.updateItem({ id, amt }));
        } catch (error) {
            console.log("update cart item error", error);
        } finally {
            dispatch(modalActions.offNotify());
        }
    }
}

export const cartUpdate = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${API}/cart`);
            console.log(response.data);
            dispatch(cartActions.updateCart({ ...response.data }));
        } catch (error) {
            console.log("cart updation error", error);

        }
    }
}