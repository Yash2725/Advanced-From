import {useState } from "react";
import Input from "./input.jsx";
import Select from "./select.jsx";

export default function ExpenseFrom({ setExpence ,expen , setExpen ,editingRowId , setEditingRowId }) {
   

   const [errors, setErrors] = useState({})
    
   const validationConfig = {
    title: [
      { required: true, message: 'Please enter title' },
      { minLength: 5, message: 'Title should be at least 5 characters long' },
    ],
    category: [{ required: true, message: 'Please select a category' }],
    amount: [{ required: true, message: 'Please enter an amount' },
      {
        pattern: /^(0|[1-9]\d*)$/,
        message:"Please Enter Valid number"
      }
    ]
     
  }

  const validate = (formData) => {
    const errorsData = {}
    
    Object.entries(formData).forEach(([key, value]) => { 
       const rules = validationConfig[key];
        if (!rules) return;
      rules.some((rule) => {
        if (rule.required && !value) {
          errorsData[key] = rule.message
          return true
        }

        if (rule.minLength && value.length < 5) {
          errorsData[key] = rule.message
          return true
        }

        if (rule.pattern && !rule.pattern.test(value)) {
          errorsData[key] = rule.message
          return true
        }
      })
    })

    setErrors(errorsData)
    return errorsData
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateResult = validate(expen)
     

    if (Object.keys(validateResult).length) return
    
    if(editingRowId){
      setExpence((prevState)=>
        prevState.map((prevExpence)=>{
          if(prevExpence.id === editingRowId){
          return {...expen , id:editingRowId}
        }
        return prevExpence
        })
       
        
      )
       setEditingRowId("")
       setExpen({
      title: " ",
      category: " ",
      amount: " ",
      
    });
      return
      
    }

    setExpence((prevState) => [...prevState, {...expen,id: crypto.randomUUID(),}]);

    setExpen({
      title: " ",
      category: " ",
      amount: " ",
      
    });
  };

   const handleChange = (e) => {
    const { name, value } = e.target
    setExpen((prevState) => ({
      ...prevState,
      [name]: value,
      
    })
  )
      setErrors({})
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input
        label="Title"
        id="title"
        name="title"
         
        value={expen.title}
        onchange={handleChange}
        error={errors.title}
      />
       
        <Select
          id="category"
          name="category"
          lable="Category"
           
          options={["Grocery" ,"Cloths","Bills", "Education" , "Medicien"]}
          value={expen.category}
          defaultOption="select"
          onchange={handleChange}
          error={errors.category}
        
          
        />
       
      <Input
        id="amount"
        name="amount"
        label="Amount"
        
        value={expen.amount}
        onchange={handleChange}
        error={errors.amount}
      />
      

      <button className="add-btn">{editingRowId ? "Save" : "Add"}</button>
    </form>
  );
}
