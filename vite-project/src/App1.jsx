import { useEffect, useState, useRef } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const a = useRef(0);
  useEffect(() => {
    a.current = a.current + 1;
    console.log(`Rendering .. a is ${a.current}`)
  })
  return (
    <>
      <div>The Count is {count}</div>
      <button onClick={() => { setCount(count + 1) }}>Update Count</button>
    </>
  )
}

export default App
