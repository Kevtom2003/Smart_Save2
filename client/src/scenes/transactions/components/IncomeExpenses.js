import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import {
    Box
  } from "@mui/material";


//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  );

  return (
    <div className="inc-exp-container">
        <div>
        <Box m="1.5rem 2.5rem">
      <FlexBetween>
      <Header title="" subtitle="Income" />
      </FlexBetween>
        </Box>
  <p className="money plus">{moneyFormatter(income)}</p>
        </div>
        <div>
        <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="" subtitle="Expense" />
      </FlexBetween>
        </Box>
  <p className="money minus">{moneyFormatter(expense)}</p>
        </div>
      </div>
  )
}