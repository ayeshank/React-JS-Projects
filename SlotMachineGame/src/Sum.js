import React from 'react'

export default function Sum(props) {

var sum=props.value1*props.value2;
  return (
    <h1>{sum}</h1>
  );
}
