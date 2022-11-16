import React from "react";
import Transaction from "../Transaction/Transaction";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Transactions.css";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  const deleteTransaction = async function (transactionId) {
    await axios.delete(`http://localhost:8000/transactions/${transactionId}`);
    _fetchTransactions();
  };

  const _fetchTransactions = async function () {
    let response = await axios.get("http://localhost:8000/transactions");
    const transactions = response["data"];
    setTransactions(transactions);
  };

  useEffect(() => {
    _fetchTransactions();
  }, []);

  return (
    <div className="transactions-container">
      {transactions.map((transaction) => (
        <Transaction
          key={transaction.id}
          transaction={transaction}
          deleteTransaction={deleteTransaction}
        />
      ))}
    </div>
  );
}
