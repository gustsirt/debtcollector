import { createContext, useState } from 'react'

export const ContextConfig = createContext()

const ConfigProvider = ({children}) => {
  const [uriBase, setUriBase] = useState('http://localhost:8080/')

  return (
    <ContextConfig.Provider value={{ uriBase }}>
      {children}
    </ContextConfig.Provider>
  )
}

export default ConfigProvider