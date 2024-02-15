const ProductDetail = ({product}) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <h2>{product.code}</h2>
      <h2>Categoria: {product.category1}</h2>
      <h2>Precio: {product.price}</h2>
    </div>
  )
}

export default ProductDetail