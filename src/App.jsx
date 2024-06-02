import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 10
  let [counter,fun] = useState(10)

  const addvalue = () => {
   
    if(counter < 20){
    fun(counter + 1)
    }
   
    
  }
  const removevalue = () => {
    
    if (counter > 0)
    fun(counter - 1)
  }
  return (
    <>
      <h1>useState hook.</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addvalue} >AddValue {counter}</button>
      <button onClick={removevalue}>RemoveValue {counter}</button>
      <footer>{counter}</footer>
    </>
  )
}

export default App
