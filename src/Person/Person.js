import React from 'react';

const Person = (props) =>{
  return (
    <div>
      <h1>My Name is {props.name} and my age is {props.age}</h1>
      <p>{props.children}</p>
    </div>
  );
}

export default Person;