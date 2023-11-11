import { useState } from 'react'

function App() {
  const [phoneBook, setPhoneBook]= useState([{name: 'Albert Geinus'}])
  const [person, setPerson] = useState('')
  
  const show = phoneBook.map(name => <p>{name.name}</p>)

  function addName(e){
    e.preventDefault()
    const newEntry = {
      name: person
    }
    setPhoneBook(phoneBook.concat(newEntry))
    setPerson('')
  }


function handleOnChange(e) {
  setPerson(e.target.value)
}

 

  return (
    <div>
      <h1>Phone Book</h1>
      <form onSubmit={addName}>
        <h4>name: 
          <input 
          value={person}
          onChange={handleOnChange}
            />
          <button type='submit'>Save</button> 
        </h4>
      </form>
      {show}
    </div>
  )
}

export default App
