import dayjs from "dayjs"
import { useEffect, useState } from "react"

const ClientDetail = ({client, onSave}) => {
  const [editClient, setEditClient] = useState({})

  useEffect( () => {
    setEditClient(client)
  }, [client])
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditClient({ ...editClient, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(editClient); // Enviar los datos editados al componente padre
  };

  return (
    <div>
      <h1>{`${editClient.last_name} ${editClient.first_name}`}</h1>
      <form onSubmit={handleSubmit}>
        <table><tbody>
          <tr>
            <td><label htmlFor="first_name">Nombre: </label></td>
            <td><input type="text" name="first_name" value={editClient.first_name} onChange={handleChange}/></td>
          </tr>
          <tr>
            <td><label htmlFor="last_name">Apellido: </label></td>
            <td><input type="text" name="last_name" value={editClient.last_name} onChange={handleChange}/></td>
          </tr>
          <tr>
            <td><label htmlFor="code">DNI: </label></td>
            <td><input type="text" name="code" value={editClient.code} onChange={handleChange}/></td>
          </tr>
          {/* <tr>
            <td><label htmlFor="birthday">Fecha de Nacimiento: </label></td>
            <td><input type="text" name="birthday" value={editClient.birthday} onChange={handleChange}/></td>
          </tr> */}
          <tr><td colSpan="2"><h3>Datos de contacto:</h3></td></tr>
          <tr>
            <td><label htmlFor="celphone">Telefono: </label></td>
            <td><input type="text" name="celphone" value={editClient.celphone} onChange={handleChange}/></td>
          </tr>
          <tr>
            <td><label htmlFor="email">E-mail: </label></td>
            <td><input type="text" name="email" value={editClient.email} onChange={handleChange}/></td>
          </tr>
          <tr><td colSpan="2"><h3>Direción:</h3></td></tr>
          <tr>
            <td><label htmlFor="state">Provincia: </label></td>
            <td><input type="text" name="state" value={editClient.state} onChange={handleChange}/></td>
          </tr>
          <tr>
            <td><label htmlFor="city">Ciudad: </label></td>
            <td><input type="text" name="city" value={editClient.city} onChange={handleChange}/></td>
          </tr>
          <tr>
            <td><label htmlFor="address">Dirección: </label></td>
            <td><input type="text" name="address" value={editClient.address} onChange={handleChange}/></td>
          </tr>
        </tbody></table>
        <div>
          <button type="submit">Guardar cambios</button>
        </div>
        <em>Ultima modificación: {dayjs(new Date(editClient.lastupdated)).format('DD/MM/YYYY HH:mm:ss')}</em>
      </form>
    </div>
  )
}

export default ClientDetail

/*
import dayjs from "dayjs"

const ClientDetail = ({client}) => {
    
  return (
    <div>
      <h1>{`${client.last_name} ${client.first_name}`}</h1>
      <strong>DNI: {client.code}</strong>
      <p>Fecha de Nacimiento: {client.birthday || "Sin datos"}</p>

      <h3>Datos de contacto:</h3>
      <p>Telefono: {client.celphone || "Sin datos"}</p>
      <p>Email: {client.email}</p>

      <h3>Direción</h3>
      <p>Provincia: {client.state || "Sin datos"}</p>
      <p>Ciudad: {client.city || "Sin datos"}</p>
      <p>Dirección: {client.address || "Sin datos"}</p>

      <em>Ultima modificación: {dayjs(new Date(client.lastupdated)).format('DD/MM/YYYY HH:mm:ss')}</em>
    </div>
  )
}

export default ClientDetail
*/