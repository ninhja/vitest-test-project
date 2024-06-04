import { useState } from 'react'

import './App.css'

function App() {
  const [formName, setFormName] = useState("")

  console.log(formName)

  return (
    <>
      <div className='main-div'>
        <form className='form'>
          <label htmlFor= "input-name"> Enter your name </label>
          <input 
          id='input-name'
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
