import React from "react";
import './Transaction.css'

export default function Transaction(props) {
  let transaction = props.transaction;

  const deleteTransaction = () => {
    props.deleteTransaction(transaction.id)
  }
  

  return (
    <div className="transaction">
      <div className="details">
        <span
          className={transaction.amount > 0 ? "depoist" : "withdrawal"}
        >{`${transaction.amount}$`}</span>
        <span className="vendor">{transaction.vendor}</span>
        <span className="category">{transaction.category}</span>
      </div>

      <div className="delete-operation">
        <button onClick={deleteTransaction}>X</button>
      </div>

    </div>
  );
}
