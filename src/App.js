import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm react app</h1>
        <p>This is really working</p>
        <Person name="Max" age="28" />
        <Person name="Manu"age="31"> My Hobbies reacting </Person>
        <Person name="Stephanie" age="23" />
      </div>
    );
  }
}

export default App;
