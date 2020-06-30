(this.webpackJsonpbudgetapp=this.webpackJsonpbudgetapp||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),o=t(8),r=t.n(o),s=(t(14),function(){return c.a.createElement("div",{className:"header"},c.a.createElement("h1",null,"Budget App"))}),l=t(4),i=t(6),m=t(1),u=function(e,n){switch(n.type){case"ADD_INCOME":return Object(m.a)(Object(m.a)({},e),{},{incomeTransactions:[n.payload].concat(Object(i.a)(e.incomeTransactions))});case"ADD_EXPENSE":return Object(m.a)(Object(m.a)({},e),{},{expenseTransactions:[n.payload].concat(Object(i.a)(e.expenseTransactions))});case"DELETE_TRANSACTION":return Object(m.a)(Object(m.a)({},e),{},{incomeTransactions:e.incomeTransactions.filter((function(e){return e.id!==n.payload})),expenseTransactions:e.expenseTransactions.filter((function(e){return e.id!==n.payload}))});default:return e}},p={incomeTransactions:JSON.parse(localStorage.getItem("incomeTransactions"))||[],expenseTransactions:JSON.parse(localStorage.getItem("expenseTransactions"))||[]},E=Object(a.createContext)(p),d=function(e){var n=e.children,t=Object(a.useReducer)(u,p),o=Object(l.a)(t,2),r=o[0],s=o[1];Object(a.useEffect)((function(){localStorage.setItem("incomeTransaction",JSON.stringify(r.incomeTransactions)),localStorage.setItem("expenseTransaction",JSON.stringify(r.expenseTransactions))}));return c.a.createElement(E.Provider,{value:{incomeTransactions:r.incomeTransactions,expenseTransactions:r.expenseTransactions,addIncome:function(e){s({type:"ADD_INCOME",payload:e})},addExpense:function(e){s({type:"ADD_EXPENSE",payload:e})},deleteTransaction:function(e){s({type:"DELETE_TRANSACTION",payload:e})}}},n)},x=function(){var e=Object(a.useContext)(E),n=e.incomeTransactions,t=e.expenseTransactions,o=n.map((function(e){return e.incomeAmount}));console.log(o);var r=t.map((function(e){return e.expenseAmount})),s=o.reduce((function(e,n){return e+n}),0).toFixed(2),l=r.reduce((function(e,n){return e+n}),0).toFixed(2);return c.a.createElement("div",{className:"balance"},c.a.createElement("h2",null,"Your Balance"),c.a.createElement("h3",null,(s-l).toFixed(2)),c.a.createElement("div",{className:"income-expense"},c.a.createElement("div",{className:"plus"},c.a.createElement("h3",null,"Income"),c.a.createElement("p",null,s)),c.a.createElement("div",{className:"minus"},c.a.createElement("h3",null,"Expenses"),c.a.createElement("p",null,l))))},f=t(3),T=t(17),b=function(){var e=Object(a.useContext)(E),n=e.addIncome,t=e.addExpense,o=Object(a.useState)({incomeText:"",incomeAmount:0}),r=Object(l.a)(o,2),s=r[0],i=r[1],u=s.incomeText,p=s.incomeAmount,d=function(e){i(Object(m.a)(Object(m.a)({},s),{},Object(f.a)({},e.target.name,e.target.value))),console.log(s)},x=Object(a.useState)({expenseText:"",expenseAmount:0}),b=Object(l.a)(x,2),O=b[0],v=b[1],N=O.expenseText,j=O.expenseAmount,g=function(e){v(Object(m.a)(Object(m.a)({},O),{},Object(f.a)({},e.target.name,e.target.value)))};return c.a.createElement("div",{className:"form-wrapper"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:Object(T.a)(),incomeText:u,incomeAmount:1*p};n(t),i({incomeText:"",incomeAmount:0})}},c.a.createElement("div",{className:"input-group income"},c.a.createElement("input",{value:u,name:"incomeText",onChange:d,type:"text",placeholder:"Add Income..",autoComplete:"off"}),c.a.createElement("input",{value:p,name:"incomeAmount",onChange:d,type:"number",placeholder:"Enter your amount..",autoComplete:"off"}),c.a.createElement("input",{type:"submit",value:"submit"}))),c.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),""!==N){var n={id:Object(T.a)(),expenseText:N,expenseAmount:1*j};t(n),v({expenseText:"",expenseAmount:0})}}},c.a.createElement("div",{className:"input-group expense"},c.a.createElement("input",{type:"text",name:"expenseText",value:N,placeholder:"Add Expense...",autoComplete:"off",onChange:g}),c.a.createElement("input",{type:"number",name:"expenseAmount",value:j,placeholder:"Amount",autoComplete:"off",onChange:g}),c.a.createElement("input",{type:"submit",value:"submit"}))))},O=function(e){var n=e.incomeTransaction,t=Object(a.useContext)(E).deleteTransaction;return c.a.createElement("div",null,c.a.createElement("li",{className:"transaction"},c.a.createElement("span",{className:"transaction-text"},n.incomeText),c.a.createElement("span",{className:"transaction-amount"},n.incomeAmount),c.a.createElement("button",{onClick:function(){return t(n.id)},className:"delete-btn"},"X")))},v=function(){var e=Object(a.useContext)(E).incomeTransactions;return console.log(e),c.a.createElement("div",{className:"transactions transactions-income"},c.a.createElement("h2",null,"Transaction List-Income"),c.a.createElement("ul",{className:"transaction-list"},e.map((function(e){return c.a.createElement(O,{key:e.id,incomeTransaction:e})}))))},N=function(e){var n=e.expenseTransaction,t=Object(a.useContext)(E).deleteTransaction;return c.a.createElement("li",{className:"transaction"},c.a.createElement("span",{className:"transaction-text"},n.expenseText),c.a.createElement("span",{className:"transaction-amount"},"$",n.expenseAmount),c.a.createElement("button",{onClick:function(){return t(n.id)},className:"delete-btn"},"X"))},j=function(){var e=Object(a.useContext)(E).expenseTransactions;return console.log(e),c.a.createElement("div",{className:"transactions transactions-expense"},c.a.createElement("h2",null,"Transaction List-Expense"),c.a.createElement("ul",{className:"transaction-list"},e.map((function(e){return c.a.createElement(N,{key:e.id,expenseTransaction:e})}))))},g=function(){return c.a.createElement(d,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"app-wrapper"},c.a.createElement(s,null),c.a.createElement(x,null),c.a.createElement(b,null),c.a.createElement(v,null),c.a.createElement(j,null))))};r.a.render(c.a.createElement(g,null),document.getElementById("root"))},9:function(e,n,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.4f1092a7.chunk.js.map