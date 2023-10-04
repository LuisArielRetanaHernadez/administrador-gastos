import { useGlobalState } from "../../context/GlobalState";

/* eslint-disable react/prop-types */
const TransactionItem = ({transaction}) => {
  const {deleteTransaction} = useGlobalState()
  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center" key={transaction.id}>
      <p className="text-sm mr-1">{transaction.description}</p>
      <span className="mr-1">${transaction.amount}</span>
      <button
      className=""
       onClick={() => {
        deleteTransaction(transaction.id)
      }}>x</button>
    </li>
  )

}

export default TransactionItem;