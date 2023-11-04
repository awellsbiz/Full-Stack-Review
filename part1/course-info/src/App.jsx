import {useState} from 'react'

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

function Button(props){

  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}
function Statistics(props){
  return <p>{props.text} : {props.feedback}</p>
}
function StatTotal(props){

  const total = props.good + props.bad + props.neutral
  
  const calculateAverage = () =>{
    return total/3
  }

  const calculatePercentage = () => {
    if (props.good === 0) return 0
    return (props.good/total) * 100
  }
  return (
    <div>
  <p>Total: {props.good + props.bad + props.neutral}</p>
  <p>Average: {calculateAverage()}</p>
  <p>Percentage: {calculatePercentage()}%</p>
  </div>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
    <Header course = 'Give Feedback' />
    <Button handleClick = {()=> setGood(good + 1)} text= 'Good' />
    <Button handleClick = {()=> setNeutral(neutral + 1)} text = 'Nuetral' />
    <Button handleClick = {()=> setBad(bad + 1)} text= 'Bad' />

    <Header course = 'Statistics' />
    <Statistics text= 'Good' feedback={good} />
    <Statistics text= 'Neutral' feedback={neutral} />
    <Statistics text= 'Bad' feedback={bad} />
    
    <StatTotal good={good} bad={bad} neutral={neutral} />



    
    </div>
  )
}

export default App
