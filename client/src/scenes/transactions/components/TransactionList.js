import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import {
    Box
  } from "@mui/material";


export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <FlexBetween>
        <Header title="History" />
      </FlexBetween>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}