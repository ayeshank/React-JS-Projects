import React,{Component} from 'react';
import '../App.css';
import SpGame from './SpGame.js';


 class Sgame extends Component {
  
  constructor(props) {
    super(props)
    
    this.state=
    {
      allowedEmoji:['😀','😍','😂'],
      clicked:null,
      x: null,
      y: null,
      z: null,
      count:0
    }
    
    this.sayHello = this.sayHello.bind(this);
    
  }
  componentDidMount() {
    this.updateXYZ();
  }
  updateXYZ() {
    this.setState(
     {
       x : this.state.allowedEmoji[Math.floor(Math.random() * this.state.allowedEmoji.length)],
       y: this.state.allowedEmoji[Math.floor(Math.random() * this.state.allowedEmoji.length)],
       z: this.state.allowedEmoji[Math.floor(Math.random() * this.state.allowedEmoji.length)],
     }
    )
  }
  sayHello() {
    this.updateXYZ();
    this.setState({ 
      clicked:1,
      count:this.state.count+1
    })
    if(this.state.count>3)
    {
      this.setState({
        count:1
      })
    }
    if(this.state.x === this.state.y && this.state.y === this.state.z && this.state.count<=3)
    {
      this.setState({
        count:1
      })
    }
  }
   render(){
    const {x,y,z,clicked,count}=this.state;
  return (
   
      <div className="backgroundSlot">
        <div className="header">
        <br/><br/><br/>
        <h2>SLOT MACHINE GAME</h2><h1>🎰 🎰 🎰</h1>
        </div>

        
        <br/><br/><br/>
        
        {x === y && y === z && count<=3? <h6>You Won!!<SpGame x={x} y={y} z={z}/></h6>:
        clicked === 1 && count<=3? <div><p>Attempt {count} out of 3</p><br/> <SpGame x={x} y={y} z={z}/></div> 
        :count>3?<div></div>: null
        
        }
        <br/><br/><br/>
        <button className="SlotButton" onClick={this.sayHello}>
        {clicked === null && count<=3?"Play Now"
        :x === y && y === z && count<=3? "Play Again"
        :count>3?"Play Now":"Try Again"
        }</button>
        
        
       
    </div>
    
  )
   }
}



export default Sgame;