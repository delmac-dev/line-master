import React from 'react'

const Line = ({top, left, width, height}) => {
  return (
    <div 
      className="line" 
      style={{
        top: `${pointList[point - 1].top + 9}px`,
        left: `${pointList[point - 1].left + 9 - 2}px`, 
        width: '4px', 
        height: '50px'
      }}
    />
  )
}

export default Line