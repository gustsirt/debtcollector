import dayjs from "dayjs"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";

const ClientDetail = ({client, onSave}) => {
  const [editClient, setEditClient] = useState({})
  const { register, handleSubmit, reset } = useForm();

  useEffect( () => {
    setEditClient(client)
    reset(client)
  }, [client])
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditClient({ ...editClient, [name]: value });
  };

  const onSubmit = (event) => {
    onSave(editClient); // Enviar los datos editados al componente padre
  };

  return (
    <div>
      <h1 className="">{`${editClient.last_name} ${editClient.first_name}`}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <table><tbody>
          <tr>
            <td><label htmlFor="first_name">Nombre: </label></td>
            <td><input {...register("first_name")} onChange={handleChange}/></td>
          </tr>
          <tr>
            <td><label htmlFor="last_name">Apellido: </label></td>
            <td><input {...register("last_name")} onChange={handleChange}/></td>
          </tr>
          <tr>
            <td><label htmlFor="code">DNI: </label></td>
            <td><input {...register("code")} onChange={handleChange}/></td>
          </tr>
          {/* <tr>
            <td><label htmlFor="birthday">Fecha de Nacimiento: </label></td>
            <td><input {...register("birthday")} onChange={handleChange}/></td>
          </tr> */}
          <tr><td colSpan="2"><h3>Datos de contacto:</h3></td></tr>
          <tr>
            <td><label htmlFor="celphone">Telefono: </label></td>
            <td><input {...register("celphone")} onChange={handleChange}/></td>
          </tr>
          <tr>
            <td><label htmlFor="email">E-mail: </label></td>
            <td><input type="email" {...register("email")} onChange={handleChange}/></td>
          </tr>
          <tr><td colSpan="2"><h3>Direción:</h3></td></tr>
          <tr>
            <td><label htmlFor="state">Provincia: </label></td>
            <td><input {...register("state")} onChange={handleChange}/></td>
          </tr>
          <tr>
            <td><label htmlFor="city">Ciudad: </label></td>
            <td><input {...register("city")} onChange={handleChange}/></td>
          </tr>
          <tr>
            <td><label htmlFor="address">Dirección: </label></td>
            <td><input {...register("address")} onChange={handleChange}/></td>
          </tr>
        </tbody></table>
        <div className="">
          <button className="m-2" type="submit">Guardar cambios</button>
        </div>
        <em>Ultima modificación: {dayjs(new Date(editClient.lastupdated)).format('DD/MM/YYYY HH:mm:ss')}</em>
      </form>
    </div>
  )
}

export default ClientDetail