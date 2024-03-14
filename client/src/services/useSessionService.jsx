import { useContext } from "react";
import { ContextConfig } from "../context/ContextConfig.jsx";
import { ContextUser } from "../context/ContextUser.jsx";


function useSessionService() {
  const { uriBase } = useContext(ContextConfig);
  const { setToken, } = useContext(ContextUser)

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const sessionLogIn = async (element) => {
    try {
      const response = await fetch(`${uriBase}api/session/login`, {
        method: "POST",
        headers,
        body: JSON.stringify(element),
      });
      const responseJson = await response.json();
      const token = responseJson.data.token;
      console.log(token); // TODO luego quitar
      setToken(`Bearer ${token}`)
      return responseJson;
    } catch (error) {
      return { isError: true, message: "Ocurrió un error", error };
    }
  };

  const sessionRegister = async (element) => {
    try {
      const response = await fetch(`${uriBase}api/session/register`, {
        method: "POST",
        headers,
        body: JSON.stringify(element),
      });
      return await response.json()
    } catch (error) {
      return { isError: true, message: "Ocurrió un error", error };
    }
  };

  const sessionUser = async (token) => {
    try {
      headers.append("Authorization", token);
      const response = await fetch(`${uriBase}api/session/user`, {
        method: "GET",
        headers,
      })
      if(response.status >= 400) throw error;
      return await response.json();
    } catch (error) {
      return { isError: true, message: "Ocurrió un error", error };
    }
  }

  const welcomeMessage = async (token) => {
    try {
      headers.append("Authorization", `Bearer ${token}`);
      const response = await fetch(`${uriBase}api/mail/send?layout=welcome`, {
        method: "POST",
        headers,
      })
      console.log(response);
      if(response.status >= 400) throw error;
      return await response.json();
    } catch (error) {
      return { isError: true, message: "Ocurrió un error", error };
    }
  }

  return { sessionLogIn, sessionRegister, sessionUser, welcomeMessage };
}

export default useSessionService;
