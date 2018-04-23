import React, { Component } from 'react'
import Context from './ContextDefinition'

class ContextProvider extends Component {
  state = {
    wordState: 'Hello from Provider',
    updateContext: (e) => this.updateContext(e)
  }

  updateContext = (e) => {
    // console.log(e.target.value);
    this.setState({ wordState: e.target.value })
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default ContextProvider