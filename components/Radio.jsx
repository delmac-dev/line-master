import React from 'react'

const Radio = ({children, index, value, name, handleChecked}) => {
  return (
    <>
        <input 
            type="radio" 
            name={name} 
            value={value} 
            id={`input-${name}-${index}`} 
            onChange={handleChecked} 
            hidden
        />
        {children}
    </>
  )
}

export default Radio