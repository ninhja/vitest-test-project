import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [formName, setFormName] = useState("")

  console.log(formName)

  return (
    <>
      <div className='main-div'>
        <form className='form'>
          <label id="label-id"> Enter your name </label>
          <input className='input-name'
           type="text" 
           value={formName}
           onChange={(e) => setFormName(e.target.value)}
           />
           
        </form>
      </div>
        
    </>
  )
}

export default App
