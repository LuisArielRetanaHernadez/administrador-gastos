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
      <div className="bg-zinc-950 text-white h-screen w-screen flex 
      justify-center items-center ">
        <div className="bg-zinc-800 p-10 rounded-lg flex">
        
        <div>
          <Header />
          <IncomeExpenses />
          <Balance />
          <TransactionForm />
        </div>
          
          <TransactionList />
        </div>
      </div>
    </GlobalProvider>
    </>
  )
}

export default App
