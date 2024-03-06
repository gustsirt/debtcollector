import { useContext } from "react";
import ApiService from "../custom.api.service.jsx";
//import { ContextConfig } from "../../context/ContextConfig.jsx";


export default class ServiceProducts extends ApiService {
  constructor (token) {
    //const { uriBase } = useContext( ContextConfig )
    super( 'api/products/', token )
  }
}