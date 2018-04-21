import React, { Component } from 'react'
import Context from './ContextDefinition'

class ContextProvider extends Component {
  state = {
    wordState: 'words',
    updateContext: (val) => this.updateContext(val)
  }

  updateContext = (val) => {
    this.setState({ wordState: val })
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