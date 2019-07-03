import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [{ name: 'Max', age: 28 }, { name: 'Manu', age: 29 }]
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

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'am React </h1>
        <p>It is really working !</p>
        <button onClick={() => this.switchNameHandler('Romain')} style={style}>
          Switch Name
        </button>
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
}

export default App;
