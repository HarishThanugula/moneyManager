import './index.css'

const MoneyDetails = props => {
  const {totalAmount, income} = props
  console.log(totalAmount)
  console.log(income)

  return (
    <>
      <div className="balance-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div>
          <p className="balance-type">Your Balance</p>
          <p className="amount">Rs {totalAmount}</p>
        </div>
      </div>
      <div className="income-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
        />
        <div>
          <p className="balance-type" data-testId="balanceAmount">
            Your Income
          </p>
          <p className="amount">Rs {income}</p>
        </div>
      </div>
      <div className="expense-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="income"
          className="image"
        />
        <div>
          <p className="balance-type" data-testid="incomeAmount">
            Your Expense
          </p>
          <p className="amount">Rs 0</p>
        </div>
      </div>
    </>
  )
}
export default MoneyDetails
