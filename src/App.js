import React, { useState } from 'react';
import './App.css';
import './Person/Person'
import Person from './Person/Person';

const App = () => {

  const [person, setPersonState] = useState({
    Person: [
      {name: "Steven", age: 23},
      {name: "John", age: 234},
      {name: "Daniel", age: 21} 
    ]
  });

  console.log(person);


  const switchNameHandler = () => {
    setPersonState({
      Person: [
        {name: "Max", age: 12},
        {name: "John", age: 234},
        {name: "Halo", age: 43} 
      ]
    })
  }

    return (
      <div className="App">
        <h1>This is my new Project</h1>
        <button onClick={switchNameHandler}>SwitchName</button>
        <Person name={person.Person[0].name} age={person.Person[0].age}>Signatue Dialogue: I am gonna kill you Voldy</Person>
        <Person name={person.Person[1].name} age={person.Person[1].age}>I don't have a life, I am just a placeholder</Person>
        <Person name={person.Person[2].name} age={person.Person[2].age}>I don't know If I am cricketer or just a name being used in
        brad's course</Person>
      </div>
    );
}
// there are basically two types of ways to create compontents which are functional components
// which uses react hooks to maintain their states from 16.8 and second one is 
//class based components

//there are two types of components stateful and stateless component
//one where business logic and computations are done and states are changed
//and are propagated to child components are called stateful
// there should be more stateless component and less stateful component
//as it might be the case that all the components are doing something leading to less reusability
// and spaghetti code

export default App;

// state = {
//   Person: [
//     {name: "Steven", age: 23},
//     {name: "John", age: 234},
//     {name: "Daniel", age: 21} 
//   ]
// }
// switchNameHandler = () => {
//   this.setState({
//     Person:[{name: "Max", age: 23},
//     {name: "John", age: 234},
//     {name: "Daniel", age: 36} ]
//   })
// }
