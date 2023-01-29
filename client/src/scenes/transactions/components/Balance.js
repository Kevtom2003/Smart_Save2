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
    '$ ' + (p[0].split('')[0]=== '-' ? '-' : '') +
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


export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <FlexBetween>
        <Header title="Your Balance" />
      </FlexBetween>
    <h1>{moneyFormatter(total)}</h1>
    </>
  )
}