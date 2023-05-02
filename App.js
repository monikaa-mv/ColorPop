import SqrBox from "./SqrBox";
import Input from "./Input";
import {useState} from 'react'

function App() {
  
  const [colorValue, setColorValue] = useState('')
  const [hexvalue, setHexvalue] = useState('')
  const [isDark, setIsDark] = useState(true)


  return (
    <div className="App">
      <SqrBox 
          colorValue={colorValue}
          hexvalue={hexvalue}
          isDark={isDark}
          />
      <Input 
        colorvalue={colorValue}
        setColorValue={setColorValue}
        setHexvalue={setHexvalue}
        isDark={isDark}
        setIsDark={setIsDark}
      />
    </div>
  );
}

export default App;
