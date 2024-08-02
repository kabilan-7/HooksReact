import React, { useReducer } from 'react'

const UseReducer = () => {
    function reducer(state,action){
          switch(action.type) {
            case 'increment':
                return {count:state.count+1}
            case 'decrement':
                return {count:state.count-1}
            default:
                return state
          }
    }
    const increment =()=>{
        dispatch({type:'increment'})
    }
    const decrement =()=>{
        dispatch({type:'decrement'})
    }
    const [state,dispatch]=useReducer(reducer,{count:0})
  return (
    <div>
        <button onClick={decrement}>-</button>
        <span>{state.count}</span>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default UseReducer