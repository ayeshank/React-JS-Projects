import React from 'react';
import Questionnaire from './questionnaire.js';


function UserGreetings(props) {
    if(props.correct >= 2)
    {
        return(
            <div>
        <br/><br/><br/><br/><br/><br/><br/>
      <h1>Congratulation You have passed the Quiz</h1>
      <br/><br/><br/><br/><br/><br/>
    </div>
        );
    }
    else
    {
        return(
            <div>
        <br/><br/><br/><br/><br/><br/><br/>
        <h1>Oops! You have failed. Try Again</h1>
      <br/><br/><br/><br/><br/><br/>
    </div>
        );
    }
  return (
    <div>
       
    </div>
  )
}

export default UserGreetings;
