/* eslint-disable react/prop-types */

import { useState } from 'react'
// import './App.css'
function Incrementer({name,get, set}) {
  
  const increment= ()=>set(get+1)
  return <button onClick={()=>increment(get,set)}>{name}</button>
}
function FeedbackButtons({good,setGood,neutral,setNeutral,bad,setBad}) {
  
    return(<>
    <h1>give feedback</h1>
    <Incrementer name='good' get={good} set={setGood}/>
    <Incrementer name='neutral' get={neutral} set={setNeutral}/>
    <Incrementer name='bad' get={bad} set={setBad}/></>)
}
function StatisticLine({name,val}) {
 return <p>{name} {val}</p> 
}
function Statistics({good,neutral,bad}) {
  let content= <p>No Feedback Given</p>
  const total=good+neutral+bad
  if (total>0) {
      content=(<>
    <StatisticLine name='good' val={good}/>
    <StatisticLine name='neutral' val={neutral}/>
    <StatisticLine name='bad' val={bad}/>
    <StatisticLine name='all' val={good+neutral+bad}/>
    <StatisticLine name='average' val={(good-bad)/total}/>
    <StatisticLine name='positive' val={`${good/total*100}%`}/>
    </>)}
  return(
    <>
    <h2>statistics</h2>
    {content}
    </>
  )
}
function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <>
        <FeedbackButtons {...{good,setGood,neutral,setNeutral,bad,setBad}}/>
        <Statistics {... {good,bad,neutral}}/>
    </>
  )
}

export default App
