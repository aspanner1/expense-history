import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList"

import "./Expenses.css";
function Expenses(props) {
  const [displayYear, setDisplayYear] = useState("2020");

  const setDisplayYearHandler = (selectedYear) => {
    setDisplayYear(selectedYear);
  };

  const selectedExpensesArray = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === displayYear;
    });

  return (
    <div>
      <Card classname="expenses">
        <ExpensesFilter
          selected={displayYear}
          onSetDisplayYear={setDisplayYearHandler}
        />
        <ExpensesChart expenses={selectedExpensesArray}/>
        <ExpensesList items={selectedExpensesArray}/>
      </Card>
    </div>
  );
}

export default Expenses;
