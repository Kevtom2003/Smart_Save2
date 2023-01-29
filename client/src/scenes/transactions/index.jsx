import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

const Transactions = () => {
    return(
        <GlobalProvider>
            <h2>
                Your Budget: $4000

            </h2>
                <h2>
      Expense Tracker
    </h2>
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