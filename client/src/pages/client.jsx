import { useEffect, useState } from "react"
import { useParams} from "react-router"
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import ClientDetail from "../components/clients/ClientDetail.jsx"


const client = () => {
  const [client, setclient] = useState({})
  const {cid } = useParams()

  useEffect(()=>{
    const getClient = async () => {
      const dataJson = await fetch(`http://localhost:8080/api/clients/${cid}`)
      const data = await dataJson.json() 
      setclient(data.data)
    } 
    getClient()
  }, [])
  
  const handleSave = async (updatedClient) =>{
    let answer = {icon: "error", text: "Error inesperado"};

    const url = `http://localhost:8080/api/clients/${cid}`
    const opciones = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedClient),
    }
    try {
      const resp = await fetch(url, opciones);
      if (resp.ok) {
        answer = {icon: "success", text: "Recurso actualizado correctamente"};
      } else {
        const error = await resp.text();
        answer = {icon: "error", text: "Error al actualizar el recurso "+error};
      }
    } catch (error) {
      answer = {icon: "error", text: "Error inesperado "+error};
    } finally {
      Swal.fire(answer);
    }
  }

  return (  
    <>
      <ClientDetail client={client} onSave={handleSave} />
      <Link className="linkBack m-2" to="/clients/">Volver a Clientes</Link>
    </>
  )
}

export default client