import React, { useState, useContext } from "react";
import {v4 as uuidv4} from 'uuid';
import { GlobalContext } from "../context/GlobalState";


const AddTransaction = () => {

    const { addIncome, addExpense } = useContext(GlobalContext);

const [income,setIncome] =useState({
 incomeText:"",
 incomeAmount: 0

})

const {incomeText, incomeAmount } = income;

const onChangeIncome = (e) =>{
 setIncome({...income,[e.target.name]: e.target.value})
 console.log(income);
}

const onSubmitIncome = e =>{
e.preventDefault();

const newIncomeTransaction ={
id:uuidv4(),
incomeText,
incomeAmount : incomeAmount*1,
};

addIncome(newIncomeTransaction);
setIncome({
    incomeText: "",
    incomeAmount: 0,
  });

};


const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: 0,
  });

  const { expenseText, expenseAmount } = expense;

  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const onSubmitExpense = (e) => {
    e.preventDefault();

    if (expenseText !== "") {
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseText,
        expenseAmount: expenseAmount * 1,
      };

      addExpense(newExpenseTransaction);

      setExpense({
        expenseText: "",
        expenseAmount: 0,
      });
    }
  };



    return (
        <div className="form-wrapper">
        <form onSubmit={onSubmitIncome}>
           <div className="input-group income">
           <input value={incomeText} name="incomeText" onChange={onChangeIncome} type="text" placeholder="Add Income.." autoComplete="off" />
           <input value={incomeAmount} name="incomeAmount" onChange={onChangeIncome} type="number" placeholder="Enter your amount.." autoComplete="off" />
            <input type="submit" value="submit"/>
           </div>
        </form>
        <form onSubmit={onSubmitExpense}>
           <div className="input-group expense">
           <input
            type="text"
            name="expenseText"
            value={expenseText}
            placeholder="Add Expense..."
            autoComplete="off"
            onChange={onChangeExpense}
          />
          <input
            type="number"
            name="expenseAmount"
            value={expenseAmount}
            placeholder="Amount"
            autoComplete="off"
            onChange={onChangeExpense}
          />
            <input type="submit" value="submit"/>
           </div>
        </form>
            
        </div>
    )
}

export default AddTransaction
