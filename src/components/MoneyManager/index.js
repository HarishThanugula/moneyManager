import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import './index.css'
import TransactionItem from '../TransactionItem'

class MoneyManager extends Component {
  state = {
    transactionTypes: [],
    title: '',
    totalAmount: 0,
    totalIncome: 0,
    totalExpense: 0,
    balance: 0,
  }

  getHistoryOfTransaction = event => {
    event.preventDefault()
    const {title, totalAmount, typeInput} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      totalAmount,
      typeInput: typeInput,
      isActive: false,
    }

    const {balance, totalIncome} = this.state
    if (typeInput === 'Expense') {
      this.setState(prevState => ({
        balance: parseInt(prevState.balance + totalAmount),
      }))
      this.setState(prevState => ({
        totalIncome: prevState.totalIncome + totalAmount,
      }))
    }

    this.setState(prevState => ({
      transactionTypes: [...prevState.transactionTypes, newTransaction],
      title: '',
      totalAmount: '',
      typeInput: '',
    }))
  }

  getTitleInput = event => {
    this.setState({title: event.target.value})
  }

  getAmountInput = event => {
    this.setState({totalAmount: event.target.value})
  }

  getTypeInput = event => {
    this.setState({typeInput: event.target.value})
  }

  render() {
    const {transactionTypes, balance, totalIncome} = this.state

    return (
      <div className="bg-container">
        <div className="content-container">
          <div className="header-container">
            <h1 className="main-name">Hi,Harish</h1>
            <p className="paragraph">
              Welcome back to your{' '}
              <span className="special">Money Manager</span>
            </p>
          </div>
          <div className="cards-container">
            <MoneyDetails income={totalIncome} totalAmount={balance} />
          </div>
          <div className="transaction-container">
            <form
              className="footer-container"
              onSubmit={this.getHistoryOfTransaction}
            >
              <h1 className="heading">Add Transaction</h1>
              <label className="label">
                TITLE
                <br />
                <input
                  type="text"
                  placeholder="TITLE"
                  className="input-element"
                  onChange={this.getTitleInput}
                />
              </label>
              <label className="label">
                AMOUNT
                <br />
                <input
                  type="text"
                  placeholder="AMOUNT"
                  className="input-element"
                  onChange={this.getAmountInput}
                />
              </label>
              <label className="label">
                TYPE
                <br />
                <select className="input-element" onChange={this.getTypeInput}>
                  <option className="selector" selected>
                    Income
                  </option>
                  <option className="selector">Expense</option>
                </select>
              </label>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
            <div className="history-container">
              <div className="transactions">
                <h1 className="heading">History</h1>
                <div className="card">
                  <p className="history">Title</p>
                  <p className="history">Amount</p>
                  <p className="history">Type</p>
                </div>
                <ul>
                  {transactionTypes.map(eachItem => (
                    <TransactionItem
                      transactionList={eachItem}
                      key={eachItem.id}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
