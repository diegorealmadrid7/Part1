import React, { useState} from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => (
  <button onClick={props.value}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  const all = props.bad + props.good + props.neutral
  if (all === 0){
    return <div>No feedback given</div>
  }

  return (
     <div>
       <table>
         <thead>
           <tr>
             <td><h2>Statistics</h2></td>
           </tr>
         </thead>
         <tbody>
         <tr>
           <td>good</td>
           <td>{props.good}</td>           
         </tr>
         <tr>
           <td>neutral</td>
           <td>{props.neutral}</td>           
         </tr>
         <tr>
           <td>bad</td>
           <td>{props.bad}</td>
         </tr>
         <tr>
           <td>all</td>
           <td>{all}</td>
         </tr>
         </tbody>
       </table>
     </div>
  )
}

const App = (props) => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (    
    <div>
      <h1>Give Feedback</h1>
      <Button value={() => setGood(good + 1)} text="good" />
      <Button value={() => setNeutral(neutral +1)} text="neutral" />
      <Button value={() => setBad(bad + 1)} text="bad" />
      <br />
      <br />
      <Statistics bad={bad} good={good} neutral={neutral} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)