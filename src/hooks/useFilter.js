import { useState } from "react"

export function useFilter(data, callback ){
  const [query ,setQuery] = useState("")

const filterData = data.filter((e)=>{
    return callback(e).toLowerCase().includes(query)
  }) 
  
  return [filterData , setQuery]
}