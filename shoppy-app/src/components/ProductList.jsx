import ProductItem from "./ProductItem";


function ProductList({ products }) {
  //rendering the list of products
  return (
    <div className="flex justify-center md:flex-row flex-wrap">
     {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList