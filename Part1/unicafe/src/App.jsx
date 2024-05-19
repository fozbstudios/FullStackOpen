/* eslint-disable react/prop-types */

import { useState } from 'react'
// import './App.css'
function Incrementer({name,get, set}) {
  
  const increment= ()=>set(get+1)
  return <button onClick={()=>increment(get,set)}>{name}</button>
}
function Stat({name,val}) {
 return <p>{name} {val}</p> 
}
function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total=good+neutral+bad
  return (
    <>
    <h1>give feedback</h1>
    <Incrementer name='good' get={good} set={setGood}/>
    <Incrementer name='neutral' get={neutral} set={setNeutral}/>
    <Incrementer name='bad' get={bad} set={setBad}/>
    <h2>statistics</h2>
    <Stat name='good' val={good}/>
    <Stat name='neutral' val={neutral}/>
    <Stat name='bad' val={bad}/>
    <Stat name='all' val={good+neutral+bad}/>
    <Stat name='average' val={(good-bad)/total}/>
    <Stat name='positive' val={`${good/total*100}%`}/>
    </>
  )
}

export default App
