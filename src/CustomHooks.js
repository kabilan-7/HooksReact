import React, { useState } from 'react'
import useLocalStorage from './useLocalStorage'
import useUpdateLogger from './useUpdateLogger'

const CustomHooks = () => {
    const [data,setData]=useLocalStorage('name','')
    useUpdateLogger(data)
  return (
    <div>
        <input value={data} type="text" onChange={(e)=>setData(e.target.value)} />
    </div>
  )
}

export default CustomHooks