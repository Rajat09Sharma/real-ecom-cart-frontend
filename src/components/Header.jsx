import { useDispatch, useSelector } from "react-redux"
import { CartModal } from "./CartModal"
import { modalActions } from "../store/modalSlice";


export const Header = () => {

    const cartItems = useSelector(state => state.cart.items)
    const isModalOpen = useSelector(state => state.modal.open)
    const notify = useSelector(state => state.modal.notify)

    const dipatch = useDispatch();

    const handleModalOpen = () => {
        dipatch(modalActions.openModal());
    }

    const handleModalClose = () => {
        dipatch(modalActions.closeModal());
    }

    return (
        <>
            <header className="w-full flex justify-between items-center py-4 px-6 mb-4">
                <div className="md:w-2/5 flex items-center gap-3 md:gap-5">
                    <img src="/logo.png" alt="Elegant model" className="w-10 md:w-1/12" />
                    <h1 className="text-2xl text-yellow-400 font-bold md:text-4xl">Vibe Commerce</h1>
                </div>
                <div>
                    <button disabled={!notify ? false : true} type="button" className="py-1 px-2 md:py-2 md:px-3 bg-yellow-300 text-neutral-700 font-semibold text-lg md:text-xl border-0 rounded-md cursor-pointer transition-colors duration-150 hover:bg-yellow-400" onClick={handleModalOpen} >Cart {cartItems.length > 0 && `(${cartItems.length})`}</button>
                </div>
            </header>

            <CartModal open={isModalOpen} onClose={handleModalClose} />
        </>
    )
}
