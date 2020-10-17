import React from 'react';
import './App.css';
import {Card,Button,Container} from 'react-bootstrap';

function CardN(props) {

  return (
    
    
<Card style={{ width: '14rem' }}  className="cardhead">
  <Card.Img variant="top" src={props.imgsrc} className="cardimg"/>
  <Card.Body>
    <Card.Text>{props.mname}
    </Card.Text>
    <Card.Footer>
    <Button className="overlay"  variant="primary"><a  style={{color:"white"}} href={props.link} className="card-link">View</a></Button>
    <Card.Text><strong>{props.price}</strong>
    </Card.Text>
    </Card.Footer>
  </Card.Body>
</Card>
  );
}
export default  CardN;