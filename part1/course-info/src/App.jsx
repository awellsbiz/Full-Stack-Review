function Header() {
  return(
    <div>
      <h1>Half stack app development</h1>
    </div>
  )
}

function Part(props) {
  return(
    <div>
      <p>
      {props.part1} {props.excercises1}
     </p>
     <p>
      {props.part2} {props.excercises2}
     </p>
     <p>
      {props.part3} {props.excercises3}
     </p>
    </div>
  )
}

function Content(props) {
 
  return(
    <div>
      <Part 
      part1 = {props.part1}
      excercises1 = {props.excercises1}
      />
      <Part 
      part2 = {props.part2}
      excercises2 = {props.excercises2}
      />
      <Part 
      part3 = {props.part3}
      excercises3 = {props.excercises3}
      />
    </div>
  )
}

function Total(props) {
  return(
    <div>
       <p>Number of excercises {props.excercises1 + props.excercises2 + props.excercises3}</p>
    </div>
  )
}

function App() {
  const part1 = 'Fundementals of react'
  const excercises1 = 10
  const part2 = 'Using props to pass data'
  const excercises2 = 7
  const part3 = 'State of a component'
  const excercises3 = 14

  return (
    <div>
    <Header />

    <Content
    part1 = {part1}
    excercises1 = {excercises1}
    part2 = {part2}
    excercises2 = {excercises2}
    part3 = {part3}
    excercises3 = {excercises3}
    />

    <Total 
    excercises1 = {excercises1}
    excercises2 = {excercises2}
    excercises3 = {excercises3}
    />
    
    </div>
  )
}

export default App
