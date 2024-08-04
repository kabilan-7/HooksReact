
import './App.css';
import { useEffect, useState, useRef} from 'react';
import UseMemo from './UseMemo';
import UseReducer from './UseReducer';
import UseCallback from './UseCallback';
function App() { 
  //useState
  //if we use callback function it only run one time of render 
  const [name,setName]=useState('')
  const [count,setCount]=useState(()=>{
    console.log("usestate")
    return 0;
  })
    const incr = ()=>{
        setCount(prev=>prev+1)
    }
    const decr = ()=>{
        setCount(prev=>prev-1)
    }
  //useEffect
  useEffect(()=> {
    console.log("useEffect")
  },[count])

  //useRef -- used to store mutable value that persist over renders without causing re-renders it is same
  const inputref=useRef(0)
  const focus=()=>{
    inputref.current.focus()
  }
  return (
    <div className='App'>
       <UseMemo/>
        {/* <UseCallback/> */}
        {/* <UseReducer/> */}
        {/* <input ref={inputref} type="text" value={name}  onChange={(e)=>{
          setName(e.target.value)
        }} />
        <div>My name is:{name}</div>
        <button onClick={focus}>Focus</button> */}
        
    </div>
  )
}

export default App;
