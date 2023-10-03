import './App.css'
import Balance from './components/Balance/Balance'
import Header from './components/Header/Header'
import IncomeExpenses from './components/IncomeExpenses/IncomeExpenses'
import TransactionForm from './components/TransactionForm/TransactionFomr'
import TransactionList from './components/TransactionForm/TransactionLista'
import GlobalProvider from './context/GlobalState'
function App() {

  return (
    <>
    <GlobalProvider>
      <Header />
      <IncomeExpenses />
      <Balance />
      <TransactionForm />
      <TransactionList />
      <h1>Hello Word</h1>
    </GlobalProvider>
    </>
  )
}

export default App
