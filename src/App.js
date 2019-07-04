import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [{ name: 'Max', age: 28 }, { name: 'Manu', age: 29 }],
      showPersons: false
    };
  }

  switchNameHandler = newName => {
    this.setState({
      persons: [{ name: newName, age: 18 }, { name: 'Roger', age: 22 }]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [{ name: 'Max', age: 18 }, { name: event.target.value, age: 22 }]
    });
  };

  togglePersonsHandler = () => {
    const { showPersons } = this.state;
    this.setState({
      showPersons: !showPersons
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, 'Blueblue')}
          >
            My hobby is breaking !
          </Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Banana')}
            changed={this.nameChangeHandler}
          >
            I love rocketing !
          </Person>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'am React </h1>
        <p>It is really working !</p>
        <button onClick={this.togglePersonsHandler} style={style}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
