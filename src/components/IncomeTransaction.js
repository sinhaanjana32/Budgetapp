import React, {useContext} from 'react'
import{GlobalContext} from '../context/GlobalState'

const IncomeTransaction = ({incomeTransaction}) => {

const {deleteTransaction} = useContext(GlobalContext)


    return (
        <div>
            <li className="transaction">
                   <span className="transaction-text">{incomeTransaction.incomeText}</span>
                   <span className="transaction-amount">{incomeTransaction.incomeAmount}</span>
                   <button
        onClick={() => deleteTransaction(incomeTransaction.id)} className="delete-btn">
       X
      </button>
              </li>
        </div>
    )
}

export default IncomeTransaction
