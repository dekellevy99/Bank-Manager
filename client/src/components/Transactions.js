import React from "react";
import Transaction from "./Transaction";

export default function Transactions(props) {
  let transactions = props.transactions;
  return (
    <div>
      {transactions.map((transaction) => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
}
