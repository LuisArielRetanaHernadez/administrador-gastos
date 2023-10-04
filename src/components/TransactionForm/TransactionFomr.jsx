import { useState } from "react"

import { useGlobalState } from "../../context/GlobalState"

import { v4 as uuidv4 } from "uuid"

const TransactionForm = () => {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState(0)

  const { addTransaction } = useGlobalState()

  const onSubmit = e => {
    e.preventDefault()

    addTransaction({
      id: uuidv4(),
      description,
      amount: +amount
    })
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
        className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        type="text" 
        placeholder="Enter a Description"
        onChange={(e) => setDescription(e.target.value)}
         />
        <input 
        className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        type="number" step={0.01} placeholder="00.00"
        onChange={(e) => setAmount(e.target.value)}
         />
        <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg">Add Transacion</button>
      </form>
    </div>
  )
}

export default TransactionForm