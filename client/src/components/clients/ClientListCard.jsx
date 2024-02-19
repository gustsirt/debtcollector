import { Link } from "react-router-dom";

const ClientCard = ({client}) => {
  return (
    <div className="card w-25 m-3">
      <div className="card-body">
          <h3>{`${client.last_name} ${client.first_name}`}</h3>
          <h3>DNI: {client.code}</h3>
      </div>
      <div className="card-footer">
          <Link to={`/client/${client._id}`} className="btn btn-outline-dark w-100">Detalle</Link>
      </div>
    </div>
  )
}

export default ClientCard