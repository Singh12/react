import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  state = {
    persons: [
      { 'name':'Rajnish', 'age':20 },
      { 'name': 'Ricky', 'age': 20 },
      { 'name': 'avi', 'age': 20 }
  ]
}
changeName = (name) => {
  this.setState( {
    persons: [
      { 'name': name, 'age': 20 },
      { 'name': 'Ricky', 'age': 20 },
      { 'name': 'avi', 'age': 20 }
    ]
  })
}
  render() {
    return (
      <div className="App">
      <h1>I am react App</h1>
      <button onClick={()=>{this.changeName('kumar')}}>Click</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}>
        </Person>
        <Person click={this.changeName.bind(this,'singh')}
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}>
        </Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}>
        </Person>
      </div>
    );
  }
}

export default App;
