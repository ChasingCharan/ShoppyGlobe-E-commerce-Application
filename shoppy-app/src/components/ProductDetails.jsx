import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { useDispatch } from "react-redux";
import { addProduct } from "../utils/cartSlice";
import {
  removeProduct,
  increaseCartQuantity,
  decreaseCartQuantity,
} from "../utils/cartSlice";
import { useSelector } from "react-redux";
import RatingStars from "../components/RatingStars";
import { useNavigate } from "react-router-dom";
import QuantitySelector from "../components/QuantitySelector";
import useFetch from "../utils/userFetch"
import { Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();// getting id from url
  const [product, setProduct] = useState({});
  const dispatch = useDispatch(); //initializing dispatch
  const cart = useSelector((state) => state.cart);//getting cart from redux store
  const Navigate = useNavigate();

  const {data, loading, error } = useFetch(`https://dummyjson.com/products/${id}`);//fetching data from api using custom hook

  //using use effect to set product whenever the data changes
  useEffect(() => {
    if (data) setProduct(data);
  }, [data]);
 
console.log(data)
  //function to handle Buy now click
  const handleBuyNow = () => {
    if (!cart.products.some((p) => p.id === product.id)) {
      dispatch(addProduct({ ...product, quantity: 1 }));
    }
    Navigate("/cart");
  };
  //showing error to the user in case of an error
  if (error)
    return (
      <div className="text-red-500 min-h-screen flex justify-center items-center text-5xl">
        {error.message}
      </div>
    );
//Rendering loader while the data is being fetched from api
  if (loading) return <Loading />;

  return (
  <div className="flex flex-col p-4 sm:p-6 md:p-10">
    {/* Product Image & Info Section */}
    <div className="flex flex-col md:flex-row justify-center min-h-[70vh] gap-6">
      <img
        src={product.thumbnail}
        alt=""
        className="w-full md:w-1/2 rounded-lg object-cover"
      />
      <div className="flex flex-col justify-center items-start gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl uppercase font-bold">
          {product.title}
        </h1>
        <RatingStars rating={product.rating} />
        <p className="text-base sm:text-lg md:text-xl font-semibold">
          {product.description}
        </p>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <p className="text-2xl sm:text-3xl font-extrabold">${product.price}</p>

          {cart.products.some((p) => p.id === product.id) ? (
            <>
              <QuantitySelector
                quantity={cart.products.find((p) => p.id === product.id).quantity}
                reduceQuantity={() => dispatch(decreaseCartQuantity(product))}
                increaseQuantity={() => dispatch(increaseCartQuantity(product))}
              />
              <Link to="/cart">
                <button className="bg-green-500 hover:bg-green-700 rounded-md shadow-lg text-white font-bold px-4 py-2 active:scale-95">
                  Go to Cart
                </button>
              </Link>
            </>
          ) : (
            <button
              onClick={() => dispatch(addProduct({ ...product, quantity: 1 }))}
              className="bg-green-500 hover:bg-green-700 rounded-md shadow-lg text-white font-bold px-4 py-2 active:scale-95"
            >
              Add to Cart
            </button>
          )}
        </div>

        <button
          onClick={handleBuyNow}
          className="bg-yellow-500 hover:bg-yellow-700 rounded-md shadow-lg text-white font-bold px-5 py-2 w-full md:w-1/2 active:scale-95"
        >
          Buy Now
        </button>
      </div>
    </div>

    {/* Product Details Section */}
    <div className="flex flex-col justify-center items-center my-10">
      <h5 className="text-2xl sm:text-3xl font-bold mb-6">Product Details</h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 text-sm sm:text-base md:text-lg w-full max-w-4xl capitalize">
        <div className="space-y-2 font-medium">
          {product.brand && <p>Brand:</p>}
          <p>Category:</p>
          <p>Shipping:</p>
          <p>Weight:</p>
          <p>Width:</p>
          <p>Height:</p>
          <p>Depth:</p>
          <p>Warranty:</p>
          <p>Return Policy:</p>
        </div>
        <div className="space-y-2 font-semibold">
          {product.brand && <p>{product.brand}</p>}
          <p>{product.category}</p>
          <p>{product.shippingInformation}</p>
          <p>{product.weight}</p>
          <p>{product.dimensions?.width || "NA"}</p>
          <p>{product.dimensions?.height || "NA"}</p>
          <p>{product.dimensions?.depth || "NA"}</p>
          <p>{product.warrantyInformation}</p>
          <p>{product.returnPolicy}</p>
        </div>
      </div>
    </div>
  </div>
);

}

export default ProductDetails;
