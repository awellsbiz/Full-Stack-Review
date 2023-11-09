import Course from './Course'

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
    <Course course={course} />
  )
}

export default App
