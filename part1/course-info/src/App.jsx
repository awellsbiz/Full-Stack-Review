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
       <p>Number of excercises {props.part1.excercises + props.part2.excercises + props.part3.excercises}</p>
    </div>
  )
}

function App() {
  const course = {
    name: 'Half stack app development',
    parts: [
    {
    name: 'Fundamentails of React',
    excercises: 10,
  },
  {
    name: 'Using props to pass data',
    excercises: 7,
  },
  {
    name: 'State of a component',
    excercises: 14,
  }
]
  }

  return (
    <div>
    <Header
    course = {course.name} />

    <Content
    part1 = {course.parts[0]}
    part2 = {course.parts[1]}
    part3 = {course.parts[2]}
    />

    <Total 
     part1 = {course.parts[0]}
     part2 = {course.parts[1]}
     part3 = {course.parts[2]}
    />
    
    </div>
  )
}

export default App
