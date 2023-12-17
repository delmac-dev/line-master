import React from 'react'

const Point = ({id, top, left, pair, color, boxes}) => {
  return (
    <div 
      className="point center activated" 
      id = "point-${i}" 
      style={{top: `${pointList[i - 1].top}px`, left: `${pointList[i - 1].left}px`}} 
      onclick = {"selectPair(this)"}
    >
      <span></span>
    </div>
  )
}

export default Point