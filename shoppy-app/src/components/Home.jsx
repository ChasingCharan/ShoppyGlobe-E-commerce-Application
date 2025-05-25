
import { useEffect, useState } from 'react'
import ProductList from '../components/ProductList';
import Loading from '../components/Loading';
import useFetch from '../utils/userFetch';

function Home(){
    const [products, setProducts] = useState([]);

    const {data, loading, error} = useFetch('https://dummyjson.com/products');//fetching data from api using custom hook

    //using useeffect to setproducts whenever the data changes

    useEffect(() => {
    if (data) {
        const filteredProducts = data.products.filter(product => product.rating > 4);
        setProducts(filteredProducts);
    }
    }, [data]);
    
    //showing loader while the data is being fetched
    if(loading) return (
        <div className="h-screen gap-4 w-screen flex items-center justify-center">
            <Loading />
        </div>)
        //rending the list of products
    return (
        <div className='flex flex-col items-center my-5'>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-5 font-bold text-gray-500 mb-4">
                Best Selling Products
            </h1>
        
            {error && <p className="text-red-500 text-xl">{error.message}</p>}
            <ProductList products={products} />
        
        </div>
    )
}

export default Home;