import { useState } from 'react'

function App() {
const [phoneBook, setPhoneBook] = useState([{name: 'Albert Einstein'}])
const [entry, setEntry] = useState('')

function handleOnChange(e){
  setEntry(e.target.value)
}

function addEntry(){
  e.preventDefault()
  console.log('The button is working...')
}


  return (
    <div>
      <h1> Phone Book! </h1>
      <form onSubmit={addEntry}>
        <label>Name: </label>
        <input value={entry} onChange={handleOnChange}/>
        <button type='submit'>Save</button>
      </form>
      <h1>Log</h1>
    </div>
  )
}

export default App
