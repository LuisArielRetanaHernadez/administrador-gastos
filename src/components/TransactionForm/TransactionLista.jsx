import { useGlobalState } from "../../context/GlobalState"

const TransactionList = () => { 
  const { transactions, deleteTransaction } = useGlobalState()

  return (
    <div>
    {
      transactions.map((transaction, index) => (
        <div key={index}>
          <p>{transaction.description}</p>
          <span>{transaction.amount}</span>
          <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
        </div>
      )).reverse()
    }
  
    </div>
  )
}

export default TransactionList