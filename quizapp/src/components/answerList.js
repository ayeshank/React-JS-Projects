import React from 'react';
import Answer from './answer.js';

function AnswerList(props) {
    const options=[];
    for(let i=0;i<props.dataSet.options.length;i++)
    {
        options.push(<Answer handleClick={props.handleClick} choice={i} answer={props.dataSet.options[i]}/>)
    }
  return (
    <div>
      {options}
    </div>
  )
}

export default AnswerList;
