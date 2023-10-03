/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useEffect } from "react";
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
  const [state, dispatch] = useReducer(AppReducer, initalState, () => {
    return localStorage.getItem("transactions") ? JSON.parse(localStorage.getItem("transactions")) : initalState
  })

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state))
  },[state])
  
  const addTransaction = (action) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: action
    })
  }

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    })
  }

  return (
    <Context.Provider value={{ 
      transactions: state.transactions,
      addTransaction,
      deleteTransaction
     }}>
      { children }
    </Context.Provider>
  )
}

export default GlobalProvider
