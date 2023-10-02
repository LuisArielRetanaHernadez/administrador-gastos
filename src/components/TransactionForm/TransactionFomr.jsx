import { useState } from "react"

import { useGlobalState } from "../../context/GlobalState"

import { v4 as uuidv4 } from "uuid"

const TransactionForm = () => {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState(0)

  const {addTransaction} = useGlobalState()

  const onSubmit = e => {
    e.preventDefault()

    addTransaction({
      id: uuidv4(),
      description,
      amount
    })
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Enter a Description"
        onChange={(e) => setDescription(e.target.value)}
         />
        <input type="number" step={0.01} placeholder="00.00"
        onChange={(e) => setAmount(e.target.value)}
         />
        <button>Add Transacion</button>
      </form>
    </div>
  )
}

export default TransactionForm