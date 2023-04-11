import './index.css'

const TransactionItem = props => {
  const {transactionList} = props
  const {title, totalAmount, typeInput} = transactionList

  return (
    <li className="card-item">
      <p className="item">{title}</p>
      <p className="item">{totalAmount}</p>
      <p className="item">{typeInput}</p>
    </li>
  )
}

export default TransactionItem
