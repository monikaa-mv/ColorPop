import colorNames from "colornames"

const Input = ({colorValue, setColorValue, setHexvalue, isDark, setIsDark}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label>Add Color Name:</label>
        <input 
            autoFocus
            type="text"
            placeholder="Add color name"
            required
            value={colorValue}
            onChange={(e) => {
                setColorValue(e.target.value)
                setHexvalue(colorNames(e.target.value))    
            }}
            />
            <button
                type="button"
                onClick={() => setIsDark(!isDark)}
            >
                Toggle Color
            </button>
    </form>
    
  )
}

export default Input