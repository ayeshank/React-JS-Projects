import React from 'react';
import TotalCorrect from './totalCorrect.js';
import TotalIncorrect from './totalIncorrect.js';
import '../App.css';


function ScoreArea(props) {
    // if(props.isFinished)
    // {
    //     return(
    //         <div className="score">
    //              <h1>Result</h1>
    //   <TotalCorrect correct={props.correct}/>
    //   <TotalIncorrect incorrect={props.incorrect}/>
    //         </div>

    //     );
    // }
  return (
    <div className="score">
      <h1>Your Result</h1>
      <TotalCorrect correct={props.correct}/>
      <TotalIncorrect incorrect={props.incorrect}/>
            </div>
    
  )
}

export default ScoreArea;
