import { useGlobalState } from "../../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useGlobalState();
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts.filter((item) => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const expenses = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);
  
  return (
    <div>
      <div>
        <h4>Income</h4>
        <p>{income}</p>
      </div>

      <div>
        <h4>Expenses</h4>
        <p>{expenses}</p>
      </div>
    </div>
  )
}

export default IncomeExpenses