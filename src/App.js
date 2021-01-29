import React, { Component } from 'react';
import './App.css';
import './Person/Person'
import Person from './Person/Person';

class App extends Component{

  state = {
    Person: [
      {id: 1, name: "Steven", age: 23},
      {id: 2, name: "John", age: 234},
      {id: 3, name: "Daniel", age: 21} 
    ]
  }
  switchNameHandler = (newName) => {
    this.setState({
      Person:[{name: newName.toString(), age: 23},
      {name: "John", age: 234},
      {name: "Daniel", age: 36} ]
    })
  }

  onChangeHandler = (event) =>{
    this.setState({
      Person:[{name: event.target.value, age: 23},
      {name: "John", age: 234},
      {name: "Daniel", age: 36} ]
    })
  }

    render(){
      const inlineStyle = {
        backgroundColor: 'white',
        border: '2px solid blue'
      } 
    return (
      <div className="App">
        <h1>This is my new Project</h1>
        <button style={inlineStyle} /*onClick={()=>this.switchNameHandler('Mac'.toString())}*/
        onClick = {this.switchNameHandler.bind(this,'Maxi')}
         on>SwitchName</button>
        <Person name={this.state.Person[0].name} age={this.state.Person[0].age} change={this.onChangeHandler}>Signatue Dialogue: I am gonna kill you Voldy</Person>
        <Person name={this.state.Person[1].name} age={this.state.Person[1].age} change={this.onChangeHandler}>I don't have a life, I am just a placeholder</Person>
        <Person name={this.state.Person[2].name} age={this.state.Person[2].age} change={this.onChangeHandler}>I don't know If I am cricketer or just a name being used in
        brad's course</Person>
      </div>
    );
    }
}

export default App;

// const [person, setPersonState] = useState({
  //   Person: [
  //     {name: "Steven", age: 23},
  //     {name: "John", age: 234},
  //     {name: "Daniel", age: 21} 
  //   ]
  // });

  // console.log(person);


  // const switchNameHandler = () => {
  //   setPersonState({
  //     Person: [
  //       {name: "Max", age: 12},
  //       {name: "John", age: 234},
  //       {name: "Halo", age: 43} 
  //     ]
  //   })
  // }


  //comments about learning
  // there are basically two types of ways to create compontents which are functional components
// which uses react hooks to maintain their states from 16.8 and second one is 
//class based components

//there are two types of components stateful and stateless component
//one where business logic and computations are done and states are changed
//and are propagated to child components are called stateful
// there should be more stateless component and less stateful component
//as it might be the case that all the components are doing something leading to less reusability
// and spaghetti code