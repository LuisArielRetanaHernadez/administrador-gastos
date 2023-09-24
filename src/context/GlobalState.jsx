/* eslint-disable react/prop-types */
import { createContext  } from "react";

export const Context = createContext()

const GlobalProvider = ({children}) => {
  return (
    <Context.Provider value={{ total: 100 }}>
      {children}
    </Context.Provider>
  )
}

export default GlobalProvider
