import { useEffect, useState } from "react";

export default function useLocalStorage(key , initialdata){
const [data , setData] = useState(initialdata)

useEffect(()=>{
  const existingData = JSON.parse(localStorage.getItem(key))
  if(existingData){
    setData(existingData)
  }else{
    setData(initialdata)
  }
},[])

const updateLocalStorage =(newdata)=>{

  if(typeof newdata ==="function"){
    localStorage.setItem(key , JSON.stringify(newdata(data))) 
  }else{
    localStorage.setItem(key , JSON.stringify(newdata))
  }
  setData(newdata)

}
  return [ data ,updateLocalStorage ]
}