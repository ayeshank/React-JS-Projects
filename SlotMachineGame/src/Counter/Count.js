import React, {useState,useEffect} from 'react';
import '../App.css';

function Count() {
    const [count,setcount]=useState(0);
   

    
  return (
    <div className="backgroundSlot">
        <div className="header">
        <br/><br/><br/>
        <h2>Counter Challenge</h2><h1> </h1>
        </div>
        <br/><br/><br/><br/><br/><br/>
       <h1 className="countdisplay">{count}</h1>
       <br/><br/>
        <button className="CountButton" onClick={()=>setcount(count+1)}>➕</button>
        <button className="CountButton" onClick={()=>{count>0?setcount(count-1):setcount(0)}}>➖</button>

        </div>
  )
}
export default Count;