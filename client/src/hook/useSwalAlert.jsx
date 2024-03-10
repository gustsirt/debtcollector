import { useNavigate } from "react-router-dom";

import Swal from 'sweetalert2'

const useSwalAlert = () => {
  const navigate = useNavigate();

  const messageAndRedirect = ( message, icon, redirect = null) => {
    Swal.fire({
      icon: icon,
      text: message,
      showConfirmButton: redirect ? true : false,
    }).then((result) => {
      if (result.isConfirmed && redirect) {
        navigate(redirect, { replace: true });
      }
    });
  }

  return {
    messageAndRedirect
  }
}
export default useSwalAlert