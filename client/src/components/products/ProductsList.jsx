import ProductCard from './ProductListCard.jsx'

const ProductsList = ({products}) => {
  return (
    <div>
      {products.map(product => <ProductCard  key={product._id} product={product}/>)}
    </div>
  )
}

export default ProductsList