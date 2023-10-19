function App() {
  const course = 'Half stack app development'
  const part1 = 'Fundementals of react'
  const excercises1 = 10
  const part2 = 'Using props to pass data'
  const excercises2 = 7
  const part3 = 'State of a component'
  const excercises3 = 14

  return (
    <>
     <h1>{course}</h1>
     <p>
      {part1} {excercises1}
     </p>
     <p>
      {part2} {excercises2}
     </p>
     <p>
      {part3} {excercises3}
     </p>
     <p>Number of excercises {excercises1 + excercises2 + excercises3}</p>
    </>
  )
}

export default App
