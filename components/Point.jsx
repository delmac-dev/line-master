import React from 'react'

const Point = ({id, top, left, pair, color, boxes}) => {
  return (
    <div 
      className="absolute w-4 aspect-square rounded-full border-2 border-primary transition-all duration-200 z-10 cursor-pointer" 
      id = "point-${i}" 
      style={{top: `${top}px`, left: `${left}px`}} 
      onclick = {"selectPair(this)"}
    >
      <span className='aspect-square w-2 rounded-full'></span>
    </div>
  )
}

export default Point