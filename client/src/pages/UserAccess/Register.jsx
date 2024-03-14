import { useForm } from "react-hook-form";
import './useraccess.scss';
import useSessionService from "../../services/useSessionService.jsx";
import useSwalAlert from "../../hook/useSwalAlert.jsx";

const Register = () => {
  const { sessionRegister, welcomeMessage } = useSessionService();
  const { messageAndRedirect } = useSwalAlert()
  const { register, handleSubmit, getValues, formState: { errors, isDirty, isValid } } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: 'emailx@prueba.com',
      password: '7123456'
    },
  });
  
  const onSubmit = async data => {
    try {
      const resp = await sessionRegister(data)
      //console.log(resp);

      if (resp?.isError === false) {
        welcomeMessage(resp.data.token)
        messageAndRedirect("Login Exitoso", "success", "/login")
      } else {
        messageAndRedirect(resp.message || "Error al registrarse", "error")
      }
    } catch (error) {
        messageAndRedirect("Error en el registro debido a un problema en el sistema", "error")
    }
  };
  
    return (
      <div className="page-container">
        <h1 className="title">Registro</h1>
        <form className="form-container-vert" onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="first_name">Nombre</label>
        <input type="text" {...register("first_name", { required: true })} />
        {errors.first_name && <p className="error-message">Este campo es requerido</p>}

        <label htmlFor="last_name">Apellido</label>
        <input type="text" {...register("last_name", { required: true })} />
        {errors.last_name && <p className="error-message">Este campo es requerido</p>}

        <label htmlFor="birthday">Fecha de Nacimiento</label>
        <input type="date" {...register("birthday", { required: true })} />
        {errors.birthday && <p className="error-message">Este campo es requerido</p>}

        <label htmlFor="typecode">Tipo de Documento</label>
        <select {...register("typecode", { required: true })}>
          <option value="DNI">DNI</option>
          <option value="Pasaporte">Pasaporte</option>
        </select>
        {errors.typecode && <p className="error-message">Selecciona un tipo de documento</p>}

        <label htmlFor="code">Documento</label>
        <input type="number" {...register("code", { required: true })}     />
        {errors.code && <p className="error-message">Este campo es requerido</p>}

        <label htmlFor="email">Email</label>
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <p className="error-message">Este campo es requerido</p>}

        <label htmlFor="password">Contraseña</label>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <p className="error-message">Este campo es requerido</p>}

        <label htmlFor="confirm_password">Confirmar Contraseña</label>
        <input type="password" {...register("confirm_password", {
            validate: value => value === getValues().password || "Las contraseñas no coinciden", })}
        />
        {errors.confirm_password && <p className="error-message">{errors.confirm_password.message}</p>}

        <button type="submit" disabled={!isDirty || !isValid}>Registrarse</button>
      </form>
    </div>
  );
};
  
  export default Register;