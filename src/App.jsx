import './App.css'
import Balance from './components/Balance/Balance'
import Header from './components/Header/Header'
import TransactionForm from './components/TransactionForm/TransactionFomr'
import TransactionList from './components/TransactionForm/TransactionLista'
import GlobalProvider from './context/GlobalState'
function App() {

  return (
    <>
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionForm />
      <TransactionList />
      <h1>Hello Word</h1>
    </GlobalProvider>
    </>
  )
}

export default App
