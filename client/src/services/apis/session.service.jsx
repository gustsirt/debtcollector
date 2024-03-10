import { useContext } from "react";
import { ContextConfig } from "../../context/ContextConfig.jsx";

const SessionService = () => {
  const { uriBase } = useContext(ContextConfig);
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const sessionLogIn = async (element) => {
    const response = await (await fetch(`${uriBase}api/session/login`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(element),
    })).json();

    return response;
  };

  const sessionRegister = async (element) => {
    const response = await (await fetch(`${uriBase}api/session/register`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(element),
    })).json();

    return response;
  };

  return { sessionLogIn, sessionRegister };
};

export default SessionService;
