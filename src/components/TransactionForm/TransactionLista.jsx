import { useGlobalState } from "../../context/GlobalState"

const TransactionList = () => { 
  const {transactions} = useGlobalState()

  return (
    <div>
    {
      transactions.map((transaction, index) => (
        <div key={index}>
          <p>{transaction.description}</p>
          <span>{transaction.amount}</span>
        </div>
      )).reverse()
    }
  
    </div>
  )
}

export default TransactionList