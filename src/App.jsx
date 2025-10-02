import { useState } from "react";
import "./App.css";
import ExpenseFrom from "./components/expenceForm.jsx";
import ExpenseTables from "./components/expenceTable.jsx";
import ExpenceData from "./expensesData.jsx";
import  UseLocalStorage  from "./hooks/useLocalStorage.js";

function App() {
  const [expen, setExpen] = UseLocalStorage( "expen",{
    title: "",
    category: "",
    amount: ""
    
  });

  const [expence, setExpence] = UseLocalStorage( "expence",ExpenceData);
  const [editingRowId, setEditingRowId] = UseLocalStorage("editingRowId","");

  const [data ,updateLocalStorage]= UseLocalStorage("mynum" , [1,2,3])

  return (
    <main>
      <h1 onClick={()=>updateLocalStorage((prevState)=> [ ...prevState ,930])} >Track Your ExpenceData</h1>
      <h2>{data.join(", ")}</h2>
      <div className="expense-tracker">
        <ExpenseFrom
          setExpence={setExpence}
          expen={expen}
          setExpen={setExpen}
          editingRowId={editingRowId}
          setEditingRowId={setEditingRowId}
        />
        <ExpenseTables
          expence={expence}
          setExpence={setExpence}
          setExpen={setExpen}
          setEditingRowId={setEditingRowId}
        />
      </div>
    </main>
  );
}

export default App;
