import { ProductCard } from "./ProductCard"

import denimPioneer from "../assets/denim-pioneer.jpg";
import dreamGown from "../assets/dream-gown.jpg";
import merlotSuit from "../assets/merlot-suit.jpg";
import mochaOvercoat from "../assets/mocha-overcoat.jpg";
import moonlightDress from "../assets/moonlight-dress.jpg";
import rainJacket from "../assets/rain-jacket.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

const IMAGES = [
    denimPioneer,
    dreamGown,
    merlotSuit,
    mochaOvercoat,
    moonlightDress,
    rainJacket
]


// const PRODUCTS = [
//     {
//         id: 'p1',
//         title: 'Majestic Vintage Mocha Overcoat',
//         price: 129.99,
//         description:
//             'Channel timeless sophistication with this stunning mocha overcoat. Crafted for the discerning gentleman who appreciates the fine blend of vintage charm and modern elegance.',
//     },
//     {
//         id: 'p2',
//         title: 'Enchanting Blush Dream Gown',
//         price: 189.99,
//         description:
//             'Bask in the glow of elegance with our Enchanting Blush Dream Gown. Embody the regality of a queen with a sweet touch of pink that whispers enchantment. This is the perfect piece for those seeking to create unforgettable moments.',
//     },

//     {
//         id: 'p3',
//         title: 'Vintage Sunshine Rain Jacket',
//         price: 49.99,
//         description:
//             'Brace the showers in style! Our Vintage Sunshine Rain Jacket ensures that you stand out, even in the dullest weather. Because rain is never a reason to compromise on your fashion quotient.',
//     },
//     {
//         id: 'p4',
//         title: 'Classic Merlot Business Suit',
//         price: 249.99,
//         description:
//             'Step into the boardroom with unmatched confidence in our Classic Merlot Business Suit. Exuding an air of refined class and understated power, it is ideal for the modern executive who values tradition and elegance.',
//     },
//     {
//         id: 'p5',
//         title: 'Ethereal Moonlight Evening Dress',
//         price: 159.99,
//         description:
//             'Sweep the room off its feet in our Ethereal Moonlight Evening Dress. Crafted to mimic the allure of the moonlight, this dress is a nod to those who appreciate subtle glamour and a standout silhouette.',
//     },
//     {
//         id: 'p6',
//         title: 'Pioneer Rugged Denim Jacket',
//         price: 79.99,
//         description:
//             'Our Pioneer Rugged Denim Jacket is a tribute to those who embody the spirit of adventure. Designed with durability and comfort in mind, this jacket is a wardrobe essential for the urban explorer.'
//     }
// ];




export const Products = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    useEffect(() => {

        const fetchProducts = async () => {
            setLoading(true);
            try {

                const response = await axios.get("http://localhost:3000/api/product");
                console.log(response);
                setProducts(response.data.products)


            } catch (error) {

                console.log("fetch products error:", error);
                setError(error.response.data.message);


            } finally {
                setLoading(false);
            }
        }

        fetchProducts();

    }, [])
    return (
        <div className="w-full py-4 px-6 flex flex-col space-y-7 md:flex-row md:justify-between md:space-y-0 md:gap-10 md:flex-wrap">
            {loading && <p className="text-xl text-center my-5">Loading products......</p>}
            {!loading && products.length == 0 && <p className="text-xl text-center my-5">No products.</p>}
            {!loading && error && <p className="text-red-500 text-lg text-center mx-auto py-2 px-3 my-4 border-2 border-red-700 bg-red-200">{error}</p>}
            {!loading && !error && products.map((product, index) => {
                return (
                    <ProductCard key={product._id} name={product.name} id={product._id} price={product.price} image={IMAGES[index]} />
                )
            })}
        </div>
    )
}
