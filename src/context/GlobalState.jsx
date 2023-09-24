/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer  } from "react";
import AppReducer from "./AppReducer";

const Context = createContext()

export const useGlobalState = () => {
  const context = useContext(Context)
  return context
}
const initalState = {
  transactions: []
}

const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initalState)
  
  const addTransaction = (action) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: action
    })
  }

  return (
    <Context.Provider value={{ 
      transactions: state.transactions,
      addTransaction,
     }}>
      { children }
    </Context.Provider>
  )
}

export default GlobalProvider
