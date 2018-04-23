import React, { Component } from 'react'
import Context from './ContextDefinition'

class ContextProvider extends Component {
  state = {
    wordState: 'Hello from Provider',
    handleInputChange: (e) => this.handleInputChange(e),
    handleInputSubmit: (e) => this.handleInputSubmit(e)
  }

  handleInputChange = (e) => ( this.setState({wordState: e.target.value}) )

  handleInputSubmit = (e) => {
    console.log('DO SOME Fancy Submit Stuff');    
    e.preventDefault();
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