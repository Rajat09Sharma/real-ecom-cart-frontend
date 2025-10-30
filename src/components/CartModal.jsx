import { useEffect, useRef } from "react"
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartCheckout, cartUpdate, updatedCartItem } from "../store/customCartActions";


export const CartModal = ({ open, onClose }) => {

    const cartItems = useSelector(state => state.cart.items);
    const notify = useSelector(state => state.modal.notify);
    const dialogRef = useRef();
    const dispatch = useDispatch();

    const totalAmt = cartItems.length == 0 ? 0 : cartItems.reduce((acc, item) => { return acc += item.price * item.quantity }, 0)

    useEffect(() => {
        if (open) {
            dialogRef.current.showModal();
        } else {
            dialogRef.current.close();
        }
    }, [open])

    useEffect(() => {
        dispatch(cartUpdate());
    }, [])

    console.log(notify);

    return createPortal(
        <dialog className="w-[90%] max-w-xl m-auto rounded-lg p-4 bg-amber-200 text-slate-900 [&::-webkit-backdrop]:bg-black/60 [&::backdrop]:bg-black/60 shadow-2xl border-none" ref={dialogRef} onClose={onClose}>
            <h2 className="text-3xl font-semibold text-amber-900">YOUR CART</h2>

            {notify != "ordered" && <div className="flex flex-col space-y-3 py-4 list-none md:text-lg">
                {cartItems.length == 0 && <li className="font-medium">No item in the cart!</li>}

                {cartItems.map((item) => <li key={item.productId} className={`flex flex-col md:flex-row md:justify-between md:items-center bg-yellow-300 px-2 py-1 rounded-md ${item.productId == notify ? 'bg-yellow-400 animate-bounce' : ''} `}>
                    <div className="flex gap-2">
                        <span className="">{item.name}</span>
                        <span className="font-bold">${item.price * item.quantity}</span>
                    </div>
                    <div className="flex items-center gap-4 mt-2">
                        <button type="button" className="w-fit text-amber-700 font-extrabold text-lg cursor-pointer" onClick={() => dispatch(updatedCartItem({ id: item.productId, amt: -1 }))}>-</button>
                        <span className="font-medium">{item.quantity}</span>
                        <button type="button" className="w-fit text-amber-700 font-extrabold text-lg cursor-pointer" onClick={() => dispatch(updatedCartItem({ id: item.productId, amt: 1 }))}>+</button>
                    </div>
                </li>
                )}
            </div>}

            {
                notify == "ordered" && <div className="text-center bg-green-100 text-green-800 p-4 rounded-md mt-4">
                    🎉 Your order was placed successfully!
                </div>
            }

            {notify !== "ordered" && <p className="text-right font-bold text-lg">Total Amount: ${totalAmt}</p>}

            <div className="flex justify-end gap-4 mt-6">
                {cartItems.length > 0 ? <>
                    <button disabled={notify == "checkout" ? true : false} type="button" className="text-lg font-medium py-1 px-4 cursor-pointer" onClick={onClose}>Close</button>
                    <button onClick={() => dispatch(cartCheckout())} disabled={notify == "checkout" ? true : false} type="button" className="text-lg font-medium py-1 px-4 bg-amber-950 text-white rounded-md cursor-pointer hover:bg-amber-900 transition-colors duration-100">{notify == "checkout" ? "Checking out" : "Checkout"}</button>
                </> :
                    <button type="button" onClick={onClose} className="text-lg font-medium py-1 px-4 bg-amber-950 text-white rounded-md cursor-pointer hover:bg-amber-900 transition-colors duration-100">close</button>
                }
            </div>
        </dialog>,
        document.getElementById("modal")
    )
}
