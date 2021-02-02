import React from 'react';
import Person from './Person/Person';
const Persons = (props) => (
  props.Person.map((person, index) => {
    return <Person name={person.name}
      age={person.age}
      key={person.id}
      change={(event)=>props.change(event,person.id)}
      delete={()=>props.delete(index)} />
  })
);

export default Persons;