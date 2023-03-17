import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsSubmitted(false);
  };
  const addExpenseData = () => {
    setIsSubmitted(true);
  };
  const resetValue = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="new-expense">
      {isSubmitted === false && (
        <button onClick={addExpenseData}>Add New Expense</button>
      )}
      {isSubmitted === true && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onCancel={resetValue}
        ></ExpenseForm>
      )}
    </div>
  );
};
export default NewExpense;
