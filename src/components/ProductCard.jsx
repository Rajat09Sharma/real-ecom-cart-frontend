import { useDispatch, useSelector } from "react-redux"
import { cartActions } from "../store/cartSlice";
import { addToCart } from "../store/customCartActions";

export const ProductCard = ({ name, image, price, id }) => {

    const notify = useSelector(state => state.modal.notify);

    const dispatch = useDispatch();

    const addItemToCart = () => {
        // dispatch(cartActions.addItem({ id, name, price }));
        dispatch(addToCart({ id, name, price }));
    }

    return (
        <>
            <article className="product w-full flex flex-col bg-yellow-950 rounded-md md:w-md">
                <img src={image} alt={name} className="rounded-md" />
                <div className="w-full product-content py-4 px-3 space-y-12">
                    <div className="space-y-3">
                        <h3 className="text-2xl font-bold ">{name}</h3>
                        <p className='product-price text-xl text-amber-400 font-semibold'>${price}</p>
                    </div>
                    <div className='product-actions w-full mb-3'>
                        <button disabled={!notify ? false : true} onClick={addItemToCart} className="w-full py-2 px-4 bg-amber-300 text-xl text-neutral-900 font-medium rounded-md cursor-pointer transition-colors duration-100 hover:bg-amber-400">{notify==id ? "Adding..." : "Add to Cart"}</button>
                    </div>
                </div>
            </article>
        </>
    )
}
