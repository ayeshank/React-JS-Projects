import React,{Component} from 'react';
import {QuizData} from './quizData.js';
import './App.css';


class Quiz extends Component {
    state={
        userans:null,
        currentques:0,
        options:[]
    }

loadQuiz=()=>{
     const {currentques}=this.state;
     this.setState(()=>{
     return{
         questions:QuizData[currentques].question,
         options:QuizData[currentques].options,
         answers:QuizData[currentques].ans
     }
     })
}

nextques=()=>{
    this.setState({
    currentques: this.state.currentques+1
    },
    ()=>this.loadQuiz()
    )
}

componentDidUpdate(prevProps,prevState){
    const {currentques}=this.state;

    if(this.state.currentques !== prevState.currentques){
        this.setState(()=>{
            return{
                questions:QuizData[currentques].question,
                options:QuizData[currentques].options,
                answers:QuizData[currentques].ans
            }   
        })
    }
}

componentDidMount(){
    this.loadQuiz();
};



    render(){
        const {questions, options}=this.state;
  return (
    <div className="one">
        <h1>Quiz App</h1>
  <span>{`Question  ${this.state.currentques+1} out of  ${QuizData.length}`}</span>
  <br/>
        {questions}
        {options.map(optionn => (
         <p
         key={optionn.id}
className={`ui floating message options ${this.state.userans === optionn ? "selected" : null}`}
        
       >
         {optionn}
       </p>

            
        ))}
            <button onClick={()=>this.nextques()}>Next</button>
    </div>
  );
  }
}

export default Quiz;
