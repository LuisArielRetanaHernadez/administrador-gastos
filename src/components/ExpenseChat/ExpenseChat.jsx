import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../../context/GlobalState";

const ExpensesChat = () => {
  const {transactions} = useGlobalState()

  const amounts = transactions.map(transaction => transaction.amount)

  const totalExpenses = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  const totalIncome = amounts.filter((item) => item > 0).reduce((acc, item) => (acc += item), 0)

  const totalExpensesPercentage = Math.round((totalExpenses / (totalExpenses + totalIncome)) * 100)
  const totalIncomePercentage = 100 - totalExpensesPercentage
  
  return (
    <VictoryPie
      data={[
        { x: "Expenses", y: totalExpensesPercentage  },
        { x: "Income", y: totalIncomePercentage }
      ]}
      animate={{ duration: 1000 }}
      labels={({ datum }) => datum.y}
      labelComponent={
        <VictoryLabel 
          angle={45}
          style={{
            fill: "white",
          }}
        />
      }
      colorScale={["tomato", "orange", "gold", "cyan"]} />
  )
}

export default ExpensesChat;