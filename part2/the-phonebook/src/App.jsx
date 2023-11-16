import { useState } from 'react'

function App() {
  const [phoneBook, setPhoneBook] = useState([{name: 'Albert Eistein'}])
  const [entry, setEntry] = useState({name: '', phone: ''})
  const [filter, setFilter] = useState('')
  const [result, setResult] = useState([])

  function handleOnChange(e){
    const { name, value} = e.target;
    if (name === 'search'){
      setFilter(value)
    }else{
      setEntry({...entry, [name]:value})
    }
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

  function handleSearch(e){
    e.preventDefault()
    const result = searchPhoneBook(filter)
    setResult(result)
  }

  function searchPhoneBook(name){
    return phoneBook.filter(entry => entry.name === name || entry.phone === name)
  }

  const searchLog = result.map(person => {
  console.log(person)
  return <p key={person}>{person.name}'s number is {person.phone}</p>
})

  return (
    <div>
      <h1>Phone Book</h1>
      <form onSubmit={handleSearch}>
        <label htmlFor='search'>Search: </label>
        <input name='search' value={filter} onChange={handleOnChange}/>
        <button type='submit'>search</button>
      </form>
      {searchLog}
      <h1>Add New</h1>
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
