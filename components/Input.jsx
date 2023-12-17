import React from 'react'

const Input = ({value, setValue}) => {
  return (
    <input 
      type="text" 
      value={value}
      onChange={setValue}
      className='w-full py-2 px-3 rounded-md bg-secondary border-0 outline-0'/>
  )
}

export default Input