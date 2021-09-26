import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Título</label>
                    <input type="text" />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Valor</label>
                    <input type="number" min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Data</label>
                    <input type="date" min="2020-09-29" max="2022-10-10" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Adicionar Despesa</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
