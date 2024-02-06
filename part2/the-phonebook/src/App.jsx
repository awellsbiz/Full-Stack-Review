import { useState, useEffect } from 'react'
import Heading from './components/Heading'
import FormField from './components/FormField'
import personService from './services/personService'


function App() {
  const [phoneBook, setPhoneBook] = useState([])
  const [entry, setEntry] = useState({name: '', number: ''})
  const [filter, setFilter] = useState('')
  const [searchResult, setSearchResult] = useState([])


  useEffect(() => {
    console.log('effect')
    personService
    .getAll()
    .then(response =>{
      console.log(response)
      setPhoneBook(response)
    })
    

  }, [])
  function handleOnChange(e){
    const { name, value} = e.target;
    if (name === 'search'){
      setFilter(value)
    }else{
      console.log('...from onChange function', name, value)
      setEntry({...entry, [name]:value})
    }
  }

  function addEntry(e){
    e.preventDefault()
    const newEntry = {
      name: entry.name,
      number: entry.number
    }
    if(!checkForDuplicate(newEntry.name)){

      setPhoneBook([...phoneBook, newEntry])
      setEntry({name: '', phone: ''})
    } else {
      alert(`Hey ${newEntry.name} is already inside of the system`)
    }
    
  }
  
  const log = phoneBook.map(entry => <p key={entry.name}>{entry.name}'s phone number is {entry.number}</p>)

  function checkForDuplicate(name){
   return phoneBook.some(taco => taco.name === name)
    }

  function handleSearch(e){
    e.preventDefault()
    const result = searchPhoneBook(filter)
    console.log('...this is it', result) 
    setSearchResult(result)
  }

  function searchPhoneBook(name){
    return phoneBook.filter(entry => {
      console.log('...from the .filter()', entry.name)
      return entry.name === name || entry.number === name })
  }

  const searchLog = searchResult.map(person => {
  console.log(person)
  return <p key={person}>{person.name}'s number is {person.number}</p>
})

  return (
    <div>
      <Heading text='The Anthony PhoneBook' />
      <FormField 
      handleAction={handleSearch}
      inputName='search'
      value={filter}
      onChange={handleOnChange}
      btnType='submit'
      btnText='Search'
      />
      {searchResult.length > 0 && (
        <div> 
          <Heading text='Name Found' />
          {searchLog}
        </div>
      )}
      <Heading text='Add A New Entry' />
      <FormField
        handleAction={addEntry}
        inputName='name'
        value={entry.name}
        onChange={handleOnChange}
        extraInput={true}
        inputName2='phone'
        value2={entry.phone}
        btnType='submit'
        btnText='Save'

        />

      {/* <form onSubmit={addEntry}>

        <label htmlFor='name'>Name: </label>
        <input name= 'name' value={entry.name} onChange={handleOnChange}/>

        <label htmlFor='phone'>Phone</label>
        <input name='phone' value={entry.phone} onChange={handleOnChange}/>
        <button type='submit'>Save</button>
      </form> */}
      <Heading text = 'PhoneBook Log' />
      {log}
    </div>
  )
}

export default App
