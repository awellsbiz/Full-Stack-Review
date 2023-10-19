function Hello(props) {
  console.log(props)
  return (
    <h1>Greetings {props.name}, the Hello component says you are {props.age}</h1>
  )
}

function App() {
  const age = 10
  const name = 'Silly'
  const friends = [
    {name: 'Shawty', age: 5},
    {name: 'Shalon', age: 7}
  ]
  const bestie = ['gilbert', ' michale']

  return (
    <div>
      <h1> I am from the App component</h1>
      <h2>I am here to learn about {friends[0].name} who is {friends[0].age}</h2>
      <h3>{bestie}</h3>
      <Hello 
      name='Billy'
      age= {45}
      />
      <Hello
      name= {name}
      age= {age+4}
      />
      <Hello
      name= {friends[1].name}
      age= {friends[1].age}
      />
    </div>
  )
}

export default App 
