import React, { Component } from 'react';
import './App.css';
import Halendar from './Halendar';
import AddHal from './AddHal';

class App extends Component {
state = {
  halendar : [

  ]
}
addHal = (hal) => {
  hal.id = Math.random();
  let halendar = [...this.state.halendar, hal];
  this.setState({
    halendar: halendar
  })
}
deleteHal = (id) => {
  let halendar = this.state.halendar.filter(ninja => {
    return ninja.id !== id
  });
  this.setState({
    halendar: halendar
  })
}
// Local storage code
componentDidMount() {
    this.hydrateStateWithLocalStorage();

    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Halendar</h1>
        <h2> Halendar, Your Daily Calendar</h2>
        <h4> Organize Your week using Halendar </h4>
        <Halendar deleteHal={this.deleteHal} halendar = {this.state.halendar} />
        <AddHal addHal={this.addHal} />
        </header>
      </div>
    );
  }
}


export default App;
