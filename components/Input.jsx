
const Input = ({value, setValue, disabled}) => {
  return (
    <input 
      type="text" 
      value={value}
      onChange={setValue}
      disabled={disabled}
      className='w-full py-2 px-3 rounded-md bg-secondary border-0 outline-0'/>
  )
}

export default Input