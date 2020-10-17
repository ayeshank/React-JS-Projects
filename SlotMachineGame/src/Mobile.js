import React, { Component } from 'react';
import Mdata from './MobileData.js';
import CardN from './Card.js';
import './App.css';


class Mobile extends Component {
  
  render() {
    // function ncard(val){
    //   return(
    //     <CardN
    //     imgsrc={val.imgsrc}
    //     price={val.price}
    //     mname={val.mname}
    //     link={val.links}
    //     />
    //   );
    // }
    return (
      <div className="background">
        <div className="header">
        <h3>Oriflame</h3>
        </div>
        <br/><br/><br/>
        
          <div className="card">
            <table>
              <tr>
                <td>
                { Mdata.map((val,index)=>{
                   return(
                    <CardN
                    key={val.id}
                    imgsrc={val.imgsrc}
                    price={val.price}
                    mname={val.mname}
                    link={val.links}
                    />
                  );
                })}
                </td>
              </tr>
            </table>
          </div>
       </div>
)
  }
}
export default  Mobile;