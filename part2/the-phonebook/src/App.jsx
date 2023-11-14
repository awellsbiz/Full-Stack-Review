import { useState } from 'react'

function App() {
  const [phoneBook, setPhoneBook] = useState([{name: 'Albert Eistein'}])
  const [entry, setEntry] = useState({name: '', phone: ''})

  function handleOnChange(e){

    const { name, value } = e.target;
    console.log(e.target, 'right here...')

    setEntry(prev => ({...prev, [name]:value}))
  }

  function addEntry(e){
    e.preventDefault()
    const newEntry = {
      name: entry.name,
      phone: entry.phone
    }
    if(!checkForDuplicate(newEntry.name)){

      setPhoneBook([...phoneBook, newEntry])
      setEntry({name: '', phone: ''})
    } else {
      alert(`Hey ${newEntry.name} is already inside of the system`)
    }
    
  }
  
  const log = phoneBook.map(entry => <p key={entry.name}>{entry.name}'s phone number is {entry.phone}</p>)

  function checkForDuplicate(name){
   return phoneBook.some(taco => taco.name === name)
    }

  return (
    <div>
      <h1>Phone Book</h1>
      <form onSubmit={addEntry}>

        <label htmlFor='name'>Name: </label>
        <input name= 'name' value={entry.name} onChange={handleOnChange}/>

        <label htmlFor='phone'>Phone</label>
        <input name='phone' value={entry.phone} onChange={handleOnChange}/>
        <button type='submit'>Save</button>
      </form>
      <h1>Log</h1>
      {log}
    </div>
  )
}

export default App
