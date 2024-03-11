import { useContext } from "react";
import { ContextConfig } from "../context/ContextConfig.jsx";
import { ContextUser } from "../context/ContextUser.jsx";


function useSessionService() {
  const { uriBase } = useContext(ContextConfig);
  const { setToken } = useContext(ContextUser)
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
      setToken(`Bearer ${token}`)
      return responseJson;
    } catch (error) {
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
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      throw error;
    }
  };

  sessionUser = async() => {
    // const response = await fetch(`${this.uriBase}api/sessions/user`, {
    //   method: "GET",
    //   headers: this.headers
    // })
    // return await response.json()
  }

  return { sessionLogIn, sessionRegister, sessionUser };
}

export default useSessionService;
