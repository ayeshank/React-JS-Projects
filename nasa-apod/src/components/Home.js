import React, {Component} from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router";
import '../App.css';


import NasaPhoto from "./NasaPhoto.js";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        visible: false,
        text:"See Into The Stars"  
    };

    this.toggleMenu = this.toggleMenu.bind(this);
}

toggleMenu() {
  if(this.state.visible == false)
  {
    this.setState({visible: true,text:"Click me to Go Back"})
  }
  else
  {
    this.setState({visible: false,text:"See Into The Stars"})
  }
}
  
  render(){
  return (
    <div className="home">
          
      
  <Link className="home-link" onClick={this.toggleMenu} to="nasaphoto" >{this.state.text}</Link>

      
      {this.state.visible && 
      <Routes> 
      <Route  path="nasaphoto" element={<NasaPhoto/>}/>
      </Routes>
  }
    </div>
  );
  }
}
export default Home;