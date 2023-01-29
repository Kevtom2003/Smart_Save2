import React from 'react';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import {
    Box
  } from "@mui/material";

import './App.css';

const Transactions = () => {
    return(
        <GlobalProvider>
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="EXPENSE TRACKER" subtitle="Quickly record and track all your money." />
        </FlexBetween>
    </Box>

        <div className="container">
        <Balance/>
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        </div>
        </GlobalProvider>


    
    );

};

export default Transactions;