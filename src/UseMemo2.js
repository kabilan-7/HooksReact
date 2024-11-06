import React, { useMemo, useState } from 'react'

const UseMemo2 = () => {
    const [count,setCount] = useState(0);
    const [todos,SetTodods] = useState([]);
   const calculation = useMemo(()=>expensiveCalculation(count),[count])
    const increament = ()=>{
        setCount(count => count+1);
    }
    const addTodos = ()=>{
       SetTodods((t) => [...todos,"New todo"]);
    }
  return (
    <div>
        <div className="to-do">
        <h2>To do</h2>
      {
         todos.map((item,index)=>{
            return <p key={index}>{item}</p>
         })
      }
      <button onClick={addTodos}>Add to do</button>
        </div>
        <div className="counter">
            Count:{count};
            <button onClick={increament}>+</button>
            <h2>Expensive Calculation</h2>
            {calculation}
        </div>
     
    </div>
  )
}
const expensiveCalculation = (num)=>{
    console.log("Calculating..");
    for(let i=0;i<10000000000;i++){
        num+=1;
    }
    return num;
}

export default UseMemo2
