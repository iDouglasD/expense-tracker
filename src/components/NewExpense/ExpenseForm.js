import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Título</label>
                    <input
                        onChange={titleChangeHandler}
                        value={enteredTitle}
                        type="text"
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Valor</label>
                    <input
                        onChange={amountChangeHandler}
                        value={enteredAmount}
                        type="number"
                        min="0.01"
                        step="0.01"
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Data</label>
                    <input
                        onChange={dateChangeHandler}
                        value={enteredDate}
                        type="date"
                        min="2020-09-29"
                        max="2022-10-10"
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Adicionar Despesa</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
