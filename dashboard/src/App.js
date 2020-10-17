import React from 'react';
import logo from './logo.svg';
import './App.css';
import FetchData from './components/FetchData';
import Chart from './components/Chart';
import Dashboard from './components/dashboard';


function App() {
  return (
    <div className="App">
     {/* <Chart/> */}
     <Dashboard/>
    </div>
  );
}

export default App;
