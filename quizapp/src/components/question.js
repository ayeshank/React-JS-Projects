import React from 'react';
import '../App.css';

function Question(props) {
  return (
    <div className="questions">
        <br/>
    <h4>Question {props.current} out of {props.datalength}</h4>    
    <h3>Q{props.current}. {props.dataSet.question}</h3> 
    <br/>   
    </div>
  )
}

export default Question;