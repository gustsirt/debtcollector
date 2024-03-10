import { ContextConfig } from "../context/ContextConfig.jsx";

const { uriBase } = useContext( ContextConfig )

export default class ApiService {
  constructor (endpoint, token = null) {
    const { uriBase } = useContext( ContextConfig )
    this.uriBase =  uriBase;
    this.endpoint = endpoint;
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
    token && this.headers.append("Authorization", token);
  }

  //Uribase: "http://localhost:PORT/"
  get = async () => await (await fetch(`${this.uriBase}${this.endpoint}`)).json();

  getById = async (eid) => await (await fetch(`${this.uriBase}${this.endpoint}${eid}`)).json();
  
  post = async(element) => {
    const response = await( await fetch(`${this.uriBase}${this.endpoint}`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(element)
    })).json();
    return response;
  }

  put = async (eid, element) => {
    const response = await(await fetch(`${this.uriBase}${this.endpoint}${eid}`, {
      method: "PUT",
      headers: this.headers,
      body: JSON.stringify(element),
    })).json();
    return response;
  }

  delete = async (eid) => {
    const response = await(await fetch(`${this.uriBase}${this.endpoint}${eid}`, {
      method: "DELETE",
      headers: this.headers,
    })).json();
    return response;
  }

}
