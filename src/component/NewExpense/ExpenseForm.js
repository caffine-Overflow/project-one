import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //event.target gives input element
  };

  const [enteredAmount, setEnteredAmount] = useState("");

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const [enteredDate, setEnteredDate] = useState("");

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  return (
    <form>
      <div className=".new-expense__controls">
        <div className=".new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={titleChangeHandler} />
        </div>
        <div className=".new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className=".new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            min="2023-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
