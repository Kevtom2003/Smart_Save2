import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import {
    Box
  } from "@mui/material";


export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <FlexBetween>
        <Header title="Add New Transaction" />
      </FlexBetween>
      <form onSubmit={onSubmit}>
        <div className="form-control">
        <FlexBetween>
        <Header title="" subtitle="Enter Here"/>
      </FlexBetween>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            ><Header title="" subtitle="Amount (negative - expense, positive - income)"/> <br />
           </label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}