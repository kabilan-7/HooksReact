import React, { useState,useMemo } from 'react'

const UseMemo = () => {
    const [count,setCount]=useState(0);
    const fun = (a,b)=>{
        return a*b;
    }
  return (
    <div>
        <div>{fun(2,3)}</div>
        <div>{count}</div>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default UseMemo