import React from 'react'
import Context from '../ContextDefinition'
import './component.css'

const FourthLayer = () => {
  return (
    <Context.Consumer>
      { value => 
        <div className='Fourth-Layer-container'>
          <p>{value.wordState}</p>          
          <form onSubmit={value.handleInputSubmit}>
            <label>
              Context Api Shared State
              <input type='text' value={value.wordState} onChange={value.handleInputChange}/>
            </label>
            <input type='submit' value='Submit' />
          </form>
        </div>
      }
    </Context.Consumer>
  )
}

export default FourthLayer