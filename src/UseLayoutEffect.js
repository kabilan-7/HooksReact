import React, { useEffect, useState } from "react";
const UseLayoutEffect = ()=>{
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log(count)
    },[count])
    return (
        <div>
      <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
      <div>{count}</div>
      </div>
    )
}
export default UseLayoutEffect