import React from 'react';
import './Person.css'

const Person = (props) =>{
  return (
    <div className="Person" >
      <h1 onClick={props.delete}>My Name is {props.name} and my age is {props.age}</h1>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.change}/>
    </div>
  );
}

export default Person;