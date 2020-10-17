import React from 'react';
import '../App.css';


 function SpGame(props) {
     var x=props.x;
     var y=props.y;
     var z=props.z;
    if(x === y && y === z)
    {
                return (
                    <div >
                        <hr/>
                        
                           
                            <h1>{props.x} {props.y} {props.z}</h1>
                            <br/><br/>
                            <h3>Lucky! Match Found</h3>
                           
                            <hr/>
                    </div>
                );
    }
    else
    {
                    return (
                        <div >
                            <hr/>
                                <h1>{props.x} {props.y} {props.z}</h1>
                                <br/><br/>
                                <h3>UnLucky! Match Not Found</h3>
                                <hr/>
                        </div>
                    );
    }
}
export default SpGame;