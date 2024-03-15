import { useForm }        from "react-hook-form";
import './useraccess.scss';
import useSessionService from "../../services/useSessionService.jsx";
import useSwalAlert from "../../hook/useSwalAlert.jsx";
import { Link } from "react-router-dom";

const LogIn = () => {
  const { sessionLogIn } = useSessionService();
  const { messageAndRedirect } = useSwalAlert()

  const { register, handleSubmit } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: 'prueba@gmail.com',
      password: '7123456'
    },
  });

  const onSubmit = async data => {
    try {
      const resp = await sessionLogIn(data)
      if(resp?.isError === false) {
        messageAndRedirect("Inicio de sessión exitoso", "success", "/")
      } else {
        messageAndRedirect("Se ha producido un error con datos enviados", "error")
      }
    } catch (error) {
      messageAndRedirect("Error en el inicio de sessión debido a un problema en el sistema", "error")
    }
  };

  return (
    <div  className="page-container">
      <h1 className="title">Inicio de Sesión</h1>
      <form className="form-container-vert" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">   Email</label>
        <input type="email" {...register("email",    { required: true})} />
        <label htmlFor="password">Contraseña</label>
        <input type="password" {...register("password", { required: true})} />
        <button type="submit">Iniciar Sesión</button>
      </form>
      <Link to='/recovery' className="recovery-link">Recupera tu contraseña</Link>
    </div>
  )
}

export default LogIn