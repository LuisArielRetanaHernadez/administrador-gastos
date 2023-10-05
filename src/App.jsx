import './App.css'
import Balance from './components/Balance/Balance'
import ExpensesChat from './components/ExpenseChat/ExpenseChat'
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

      <div className='container mx-auto w-2/5'>

        <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-2">
          
          <div>
            <Header />
            <IncomeExpenses />
            <Balance />
            <TransactionForm />
          </div>

          <div className='flex flex-col flex-1'>
            <TransactionList />
            <ExpensesChat />
          </div>
          
        </div>
      </div>
   
      </div>
    </GlobalProvider>
    </>
  )
}

export default App
