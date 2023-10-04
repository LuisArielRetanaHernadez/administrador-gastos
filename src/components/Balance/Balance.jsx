import { useGlobalState } from "../../context/GlobalState"

const Balance = () => {
  const { transactions } = useGlobalState()
  
  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <div className="flex justify-between">
      <h3>Balance</h3>
      <h2 className="text-2x1 font-bold">
        {total}
      </h2>
      
    </div>
  )
}

export default Balance