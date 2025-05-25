import React from "react";
import { useDispatch } from "react-redux";
import {
  addProduct,
  removeProduct,
  emptyCart,
  increaseCartQuantity,
  decreaseCartQuantity,
} from "../utils/cartSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";
import QuantitySelector from "./QuantitySelector";

function ProductItem({ product }) {
  
  const dispatch = useDispatch(); // Initializing useDispatch hook
  const cart = useSelector((state) => state.cart); // Initializing useSelector hook

  //function to add product to cart
  const addToCart = () => {
    dispatch(addProduct({ ...product, quantity: 1 }));
  };

  //function to remove product from cart
  const removeFromCart = () => {
    dispatch(removeProduct(product));
  };

  //function to increase quantity
  const increaseQuantity = () => {
    dispatch(increaseCartQuantity(product));
  };

  //function to decrease quantity
  const decreaseQuantity = () => {
    dispatch(decreaseCartQuantity(product));
  };

  return (
    <div className="m-2 w-[350px] h-[520px] group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative ">
      <Link to={`/products/${product.id}`}>
        <img src={product.thumbnail} alt="thumbnail" />

        <p className="font-semibold text-gray-500 tracking-wider group-hover:text-gray-700 text-xl">
          {product.title}
        </p>
        {/* rendering rating */}
        <RatingStars rating={product.rating} />
        <p className="font-semibold text-gray-600 text-xs my-3">
          {product.description}
        </p>
      </Link>
      <div className="flex flex-row justify-between items-center w-full">
        <p className="text-[#778e56] font-semibold group-hover:text-gray-800">
          <span className="mr-2 text-red-500">
            <strike>${Math.round(product.price + 5)}</strike>
          </span>
          ${product.price}
        </p>
        <Link to={`/products/${product.id}`}>
          <button className="hover:bg-[#565319] hover:text-white bg-[#85925df6] shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full">Details</button>
        </Link>
        {cart.products.some((p) => p.id === product.id) ? (
          <QuantitySelector
            quantity={cart.products.find((p) => p.id === product.id).quantity}
            reduceQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
          />
        ) : (
          <p
            onClick={addToCart}
            className="btun4 lg:inline-flex items-center gap-3 hover:bg-[#565319] hover:text-white  bg-[#85925df6] shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full"
          >
            Add to cart
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
