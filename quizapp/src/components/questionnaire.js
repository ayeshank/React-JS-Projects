import React, { Component } from 'react';
import '../App.css';
import dataSet from '../api/dataSet';
import QuizArea from './quizArea';
import ScoreArea from './scoreArea';

class Questionnaire extends Component {
    constructor(){
        super();
        this.state={
            current:0,
            dataSet:dataSet,
            correct:0,
            incorrect:0,
            isFinished:false,
            replay:false
        }
        this.handleClick=this.handleClick.bind(this);
    };
    handleClick(choice){
      
      
        
        if (choice == this.state.dataSet[this.state.current].correct) {
            this.setState({correct:this.state.correct+1})
        }
        else
        {
            this.setState({incorrect:this.state.incorrect+1})
        }

        if(this.state.current == this.state.dataSet.length-1)
        {
            this.setState({isFinished:true})
        }
        else
        {
            this.setState({current:this.state.current+1})
        }
      
    }
  render() {
    return (
      <div className="questionnaire">
          <br/>
          <h1 style={{fontFamily:"serif"}}>QUIZ APP</h1>
          <br/>
        <QuizArea 
        handleClick={this.handleClick} 
        isFinished={this.state.isFinished} 
        dataSet={this.state.dataSet[this.state.current]}
        datalength={this.state.dataSet.length}
        current={this.state.current+1}
        correct={this.state.correct}
        incorrect={this.state.incorrect}
        />
        <br/><br/>
        {/* <br/><br/><br/><br/><br/><br/> */}
        <ScoreArea correct={this.state.correct} isFinished={this.state.isFinished} incorrect={this.state.incorrect}/>
        <br/><br/><br/><br/>
      </div>
    )
  }
}

export default Questionnaire;
