import React, { useState } from 'react'
import useLocalStorage from './useLocalStorage'

const CustomHooks = () => {
    const [data,setData]=useLocalStorage('name','')
  return (
    <div>
        <input value={data} type="text" onChange={(e)=>setData(e.target.value)} />
    </div>
  )
}

export default CustomHooks