import {useState} from 'react'

function Header({text}) {
  return <h1>{text}</h1>
}

function Button({action, text}){

  return <button onClick={action}>{text}</button>
}

function Content({text}){

  return <div>{text}</div>
}




function App() {
  
  const anecdotes = ['If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.']

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))
 


 const randomGenerator = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
 }

 const handleVote = () => {
  setVote(previousVote => {
    const updatedVote = [...previousVote]
    updatedVote[selected] += 1
    return updatedVote 
  })

}

const popularVote = () => {
 let topVoteIndex = 0
 let maxVote = vote[0]

 for(let i = 1; i < vote.length; i++){
  if (vote[i] > maxVote){
    maxVote = vote[i];
    topVoteIndex = i
  }
 }
 return <p>{anecdotes[topVoteIndex]}</p>
}

  return (
    <div>
    <Header text ='Anecdote of the Day' />
    <Content text= {anecdotes[selected]} />
    <Button action= {() => randomGenerator()} text= 'New Anecdote'/>
    <Button action= {handleVote} text= 'Vote'/>
    <Header text = 'Most Popular Anecdote' />
    <Content text={popularVote()} />

  
    </div>
  )
}

export default App
