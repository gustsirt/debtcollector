import ClientCard from "./ClientListCard"

const ClientsList = ({clients}) => {
  return (
    <div>
      {clients.map(client => <ClientCard  key={client._id} client={client}/>)}
    </div>
  )
}

export default ClientsList