import React, { Component } from 'react';

import Context from './ContextDefinition'
import ContextProvider from './ContextProvider.js'
import logo from './logo.svg';
import './App.css';





class App extends Component {

  state = {
    word: 'Update'
  }

  render() {
    return (
      <ContextProvider>
        <Context.Consumer>
          { value => {
            return (
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Welcome to My React Context Payground </h1>
                </header>
                <p className="App-intro">
                  {value.wordState}
                </p>
                <button onClick={() => value.updateContext(this.state.word)}>
                  UPDATE
                </button>
              </div>
              )
            }
          }
        </Context.Consumer>
      </ContextProvider>
    )
  }
}

export default App;
