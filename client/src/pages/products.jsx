import { useEffect, useState } from "react"
import ProductsList from "../components/products/ProductsList"


const products = () => {
  const [products, setproducts] = useState([])
  useEffect(() => {
    const getRoducts = async () => {
      const dataJson = await fetch('http://localhost:8080/api/products')
      const data = await dataJson.json()
      setproducts(data.data)
  } 
  getRoducts()
  }, [])

  return (
    <div className="w-100"><ProductsList products={products}/></div>
  )
}

export default products