import { useState, useCallback } from "react";

function useCurrencyInfo(currency){
  const [data,setData] = useState({});
  useCallback(()=>{
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then((res)=> res.json())
    .then((res)=>setData(res[currency]))
  },[currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;