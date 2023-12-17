
const Grid = ({children, row=9, column=9, size=50}) => {
  return (
    <div className="p-10 rounded-xl bg-secondary">
      <div 
        style={{
          width: `${(column) * size}px`,
          height: `${(row) * size}px`,
          gridTemplateColumns: `repeat(${column}, 1fr)`,
          gridTemplateRows: `repeat(${row}, 1fr)`
        }}
        className="relative grid"
      >
        {children}
      </div>
    </div>
  )
}

export default Grid;