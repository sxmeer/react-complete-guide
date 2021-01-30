import React, { Component } from 'react';
import './App.css';
import './Person/Person'
import Person from './Person/Person';

class App extends Component {

  state = {
    Person: [
      { id: 1, name: "Steven", age: 23 },
      { id: 2, name: "John", age: 234 },
      { id: 3, name: "Daniel", age: 21 }
    ],
    isPersonListVisible: true
  }
  switchNameHandler = (newName) => {
    this.setState({
      Person: [{ name: newName.toString(), age: 23 },
      { name: "John", age: 234 },
      { name: "Daniel", age: 36 }]
    })
  }

  onNameChangeHandler = (event, personId) => {
    const personIndex = this.state.Person.findIndex(p => p.id === personId);
    const changedPerson = {
      ...this.state.Person[personIndex]
    }
    changedPerson.name = event.target.value;

    const allPersons = [
      ...this.state.Person
    ]
    allPersons[personIndex] = changedPerson;
    this.setState({
      Person: allPersons
    });

  }

  onChangeHandler = (event) => {
    this.setState({
      Person: [{ name: event.target.value, age: 23 },
      { name: "John", age: 234 },
      { name: "Daniel", age: 36 }]
    })
  }

  onDeleteHandler = (index) => {
    let persons = [...this.state.Person];
    persons.splice(index, 1);
    this.setState({
      Person: persons
    })
  }


  togglePersonHandler = () => {
    let lastState = this.state.isPersonListVisible;
    this.setState({
      isPersonListVisible: !lastState
    });
  }

  render() {
    const inlineStyle = {
      backgroundColor: 'white',
      border: '2px solid blue',
      padding: '16px',
      borderRadius: '5px',
      cursor: 'pointer'
    }
    const visibility = {
      display: 'none'
    }

    let personElement = null;
    if (this.state.isPersonListVisible) {
      personElement = (
        <div>
          {this.state.Person.map((person, index) => {
            return <Person name={person.name}
              age={person.age}
              key={person.id}
              change={(event) => this.onNameChangeHandler(event, person.id)}
              delete={this.onDeleteHandler.bind(this, index)} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>This is my new Project</h1>
        <button style={{ ...inlineStyle, ...visibility }}
          /*onClick={()=>this.switchNameHandler('Mac'.toString())}*/
          onClick={this.switchNameHandler.bind(this, 'Maxi')}
          on>SwitchName</button>

        <button
          /*onClick={()=>this.switchNameHandler('Mac'.toString())}*/
          onClick={this.togglePersonHandler}
          on>{this.state.isPersonListVisible ? 'Hide Person List' : 'Show Person List'}</button>
        {personElement}


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