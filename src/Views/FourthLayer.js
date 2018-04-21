import React from 'react'
import Context from '../ContextDefinition'
import './component.css'

const FourthLayer = () => {
  return (
    <Context.Consumer>
      { value => 
        <div className='Fourth-Layer-container'>
          <p>{value.wordState}</p>          
        </div>
      }
    </Context.Consumer>
  )
}

export default FourthLayer