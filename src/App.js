import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ]
  }

  switchNameHandler = (firstName) => {
    this.setState({
       persons: [
        {name: firstName, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 16}
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
       persons: [
        {name: 'a', age: 28},
        {name: event.target.value, age: 29},
        {name: 'c', age: 16}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm react app</h1>
        <p>This is really working</p>
        <button onClick={ () => this.switchNameHandler('Maximilian!') }>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Max2')}
          change={this.nameChangeHandler}
          > My Hobbies reacting </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
