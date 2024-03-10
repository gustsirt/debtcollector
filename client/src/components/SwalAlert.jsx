import { useEffect } from 'react';
import Swal from 'sweetalert2'

const SwalAlert = ( message, icon, redirect) => {
  useEffect(() => {
    Swal.fire({
      icon: icon,
      text: message,
      showConfirmButton: path ? true : false,
    }).then((result) => {
      if (result.isConfirmed && path) {
        navigate(path, { replace: true });
      }
    });
  }, [message, icon, path]);

  return null;
}

export default SwalAlert