
const Grid = ({children}) => {
  return (
    <div class="game-matrix-container center">
      <div class="game-matrix">
        {children}
      </div>
    </div>
  )
}

export default Grid