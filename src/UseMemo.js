import React, { useState,useMemo,useEffect} from 'react'

const UseMemo = () => {
    const [number,setNumber] = useState(0)
    const [dark,setDark] = useState(false)
    const doublenumber = useMemo(()=>{
     return slowfunction(number)
    },[number])
    const theme = useMemo(()=>{ 
       //every time component re-render it will create new memory for theme object.
       return {
        backgroundColor:dark?'#333':'#FFF',
        color:dark? '#FFF':'#333'
       }
    },[dark])
    useEffect(()=>{
        console.log("Theme changed")
    },[theme])

    function slowfunction(num){
      console.log("calling slow function")
      for(let i=0;i<10000000;i++){

      }
      return num*2;
    }
  return (
    <div >
        <input type="number" value={number} onChange={(e)=>setNumber(parseInt(e.target.value))} />
        <button onClick={()=>setDark(prev=>!prev)}>Toggle Theme</button>
        <div style={theme}>{doublenumber}</div>
    </div>
  )
}

export default UseMemo