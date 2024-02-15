import { useEffect, useState } from "react"
import { useParams } from "react-router"
import ProductDetail from "../components/products/ProductDetail"

const Product = () => {
  const [product, setProduct] = useState({})
  const {pid } = useParams()

  useEffect(()=>{
    const getProduct = async () => {
      const dataJson = await fetch(`http://localhost:8080/api/products/${pid}`)
      const data = await dataJson.json() 
      setProduct(data.data)
    } 
    getProduct()
  }, [])
  
  return (  
    <ProductDetail product={product} />
  )
}

export default Product