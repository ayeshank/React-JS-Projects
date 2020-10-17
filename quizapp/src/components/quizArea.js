import React from 'react';
import Question from './question.js';
import AnswerList from './answerList.js';
import UserGreetings from './userGreetings.js';
import Questionnaire from './questionnaire.js';

function QuizArea(props) {
    if(props.isFinished == true)
    {
        return (
          <div>
        <UserGreetings correct={props.correct} incorrect={props.incorrect}/>
          </div>
        );

    }
  return (
    <div>
      {/* <h1>Quiz Area</h1> */}
      <Question dataSet={props.dataSet} datalength={props.datalength} current={props.current}/>
      <AnswerList handleClick={props.handleClick} dataSet={props.dataSet}/>
    </div>
  );
}

export default QuizArea;
