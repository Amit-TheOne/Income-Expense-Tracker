import React, { createContext, useReducer } from "react";

import contextReducer from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem("transactions")) || [{ amount: 2300, category: "House", type: "Expense", date: "2023-07-24", id: "sample1" }, { amount: 2500, category: "Salary", type: "Income", date: "2023-07-24", id: "sample2" }];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    // Action Creators
    const deleteTransaction = (id) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    }

    const addTransaction = (transaction) => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    }

    const balance = transactions.reduce((acc, currVal) => currVal.type === "Expense" ? acc - currVal.amount : acc + currVal.amount, 0);

    return (
        <ExpenseTrackerContext.Provider value={{
            addTransaction,
            deleteTransaction,
            transactions,
            balance
        }} >
            {children}
        </ExpenseTrackerContext.Provider >
    )
}
