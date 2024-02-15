
import { useEffect, useState } from "react"
import ClientsList from "../components/clients/ClientsList"

const clients = () => {
  const [clients, setclients] = useState([])
  useEffect(() => {
    const getClients = async () => {
      const dataJson = await fetch('http://localhost:8080/api/clients')
      const data = await dataJson.json()
      setclients(data.data)
  } 
  getClients()
  }, [])

  return (
    <div className="w-100"><ClientsList clients={clients}/></div>
  )
}

export default clients