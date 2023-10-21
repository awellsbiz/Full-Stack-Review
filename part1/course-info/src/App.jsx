function Header(props) {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

function Part(props) {

  return(
    <div>
      <p>
      {props.part.name} {props.part.excercises}
     </p>
    </div>
  )
}

function Content(props) {
  console.log(props)
 
  return(
    <div>
      <Part 
      part = {props.part1}
      />
      <Part 
      part = {props.part2}
      />
      <Part 
      part = {props.part3}
      />
    </div>
  )
}
function Total(props) {
  return(
    <div>
       <p>Number of excercises {props.part1.excercises}</p>
    </div>
    // <div>
    //    <p>Number of excercises {props.part1.excercises + props.part2.excercises + props.part3.excercises}</p>
    // </div>
  )
}

function App() {
  const course = 'Half stack app development'
  const part1 = {
    name: 'Fundamentails of React',
    excercises: 10,
  }
  const part2 = {
    name: 'Using props to pass data',
    excercises: 7,
  }
  const part3 = {
    name: 'State of a component',
    excercises: 14,
  }

  return (
    <div>
    <Header
    course = {course} />

    <Content
    part1 = {part1}
    part2 = {part2}
    part3 = {part3}
    />

    <Total 
    part1 = {part1}
    part2 = {part2}
    part3 = {part3}
    />
    
    </div>
  )
}

export default App
