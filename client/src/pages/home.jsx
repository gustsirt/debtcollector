import useUserVerification from '../hook/useUserVerification.jsx';

const Home = () => {
  useUserVerification()

  return (
    <div className="page-container">
      <h1>Bienvenidos a DebtCollector</h1>
      <p>WebApp en construcción</p>
    </div>)
}

export default Home
