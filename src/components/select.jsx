import React from 'react'

export default function select({label,id,name,value,onchange,defaultOption ,options,error}) {
  return (
    <div className="input-container">
        <label htmlFor= {id} >{label}</label>
        <select
          id={id}
          name={name}
          required
          value={value}
          onChange={onchange}
        >
          {defaultOption && (<option   hidden>
            {defaultOption}
          </option>)}
        {options.map((opt,i)=>{
                return    <option key={i} value={opt}>{opt}</option>

        })}
        </select>
         <p className="error">{error}</p>
      </div>
  )
}
