import React, { useState } from "react";
import "./TransactionOperations.css";
import { ToastContainer } from "react-toastify";
import notify from "../Toast/Toast";
import axios from "axios";

export default function TransactionOperations() {
  const [transactionInputs, setTransactionInputs] = useState({
    amount: "",
    vendor: "",
    category: "",
  });

  const handleInput = function (event) {
    let target = event.target;
    setTransactionInputs({ ...transactionInputs, [target.name]: target.value });
  };

  const postTransaction =  function(transaction){
    axios
    .post("http://localhost:8000/transactions", transaction)
    .then((res) => notify(true, "Success"))
    .catch((res) => notify(false, 'Error'));
  }

  const handleClick = async function (event) {
    let transaction = { ...transactionInputs };
    transaction["amount"] =
      event.target.name === "deposit"
        ? parseInt(transaction.amount)
        : -parseInt(transaction.amount);
    console.log(transaction);
    postTransaction(transaction)
  };

  return (
    <div className="transaction-operations">
      <h2 className="title">Insert Transaction</h2>

      <div className="inputs">
        <input
          value={transactionInputs.amount}
          type="number"
          name="amount"
          placeholder="Transaction amount"
          onChange={handleInput}
        ></input>
        <input
          value={transactionInputs.vendor}
          type="text"
          name="vendor"
          placeholder="Transaction vendor"
          onChange={handleInput}
        ></input>
        <input
          value={transactionInputs.category}
          type="text"
          name="category"
          placeholder="Transaction category"
          onChange={handleInput}
        ></input>
      </div>

      <div className="buttons">
        <button name="withdraw" onClick={handleClick}>
          withdraw
        </button>
        <button name="deposit" onClick={handleClick}>
          Deposit
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}
