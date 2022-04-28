import ExpenseList from './ExpenseList';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter'
import ExpenseChart from "./ExpenseChart";

import { useState } from 'react';

import './Expenses.css';


function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

  return (
    <div>
        <Card className="expenses">
            <ExpenseFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpenseChart expenses = {filteredExpenses}/>
            <ExpenseList items = {filteredExpenses} />
        </Card>
    </div>
  );
}
export default Expenses;