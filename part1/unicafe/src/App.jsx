import {useState} from 'react'

function Header(props) {
  return(
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

function Button(props){

  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}
const StatisticLine = ({ text, value }) => <div> <p>{text}: {value}</p></div>
  


function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  function renderStatistics() {
    const total = good + bad + neutral

    const calculateAverage = () =>{
    return total/3
  }

  const calculatePercentage = () => {
    
    if (good === 0) return 0

    const percentage = Math.round((good/total) * 100)
    return percentage + '%'
  }
    if (total === 0) {
        return <p>No feedback given</p>
      }
    return (
      <>
      <StatisticLine text='Good' value={good} />
      <StatisticLine text='Neutral' value={neutral} />
      <StatisticLine text='Bad' value={bad} />
      <StatisticLine text='Average' value={calculateAverage()} />
      <StatisticLine text='Percentage' value={calculatePercentage()} />
      </>
    )
  
  }


  return (
    <div>
    <Header text= 'Give Feedback' />
    <Button handleClick = {()=> setGood(good + 1)} text= 'Good' />
    <Button handleClick = {()=> setNeutral(neutral + 1)} text = 'Nuetral' />
    <Button handleClick = {()=> setBad(bad + 1)} text= 'Bad' />

    <Header text= 'Statistics' />

    {renderStatistics()}
    




    
    </div>
  )
}

export default App

