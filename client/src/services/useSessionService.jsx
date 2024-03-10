import { useContext } from "react";
import { ContextConfig } from "../context/ContextConfig.jsx";

function useSessionService() {
  const { uriBase } = useContext(ContextConfig);
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const sessionLogIn = async (element) => {
    try {
      const response = await fetch(`${uriBase}api/session/login`, {
        method: "POST",
        headers,
        body: JSON.stringify(element),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      throw error;
    }
  };

  const sessionRegister = async (element) => {
    try {
      const response = await fetch(`${uriBase}api/session/register`, {
        method: "POST",
        headers,
        body: JSON.stringify(element),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al registrar:", error);
      throw error;
    }
  };

  return { sessionLogIn, sessionRegister };
}

export default useSessionService;
