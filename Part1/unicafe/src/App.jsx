
import { useState } from 'react'
// import './App.css'
function Incrementer({name,get, set}) {
  
  const increment= ()=>set(get+1)
  return <button onClick={()=>increment(get,set)}>{name}</button>
}
function Stat({name,count}) {
 return <p>{name} {count}</p> 
}
function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <>
    <h1>give feedback</h1>
    <Incrementer name='good' get={good} set={setGood}/>
    <Incrementer name='neutral' get={neutral} set={setNeutral}/>
    <Incrementer name='bad' get={bad} set={setBad}/>
    <h2>statistics</h2>
    <Stat name='good' count={good}/>
    <Stat name='neutral' count={neutral}/>
    <Stat name='bad' count={bad}/>
    </>
  )
}

export default App
