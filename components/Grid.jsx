"use client";

const Grid = ({children}) => {
  return (
    <div class="p-10 rounded-md bg-secondary">
      <div class="relative grid">
        {children}
      </div>
    </div>
  )
}

export default Grid;