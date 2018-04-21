import React from 'react'
import Context from '../ContextDefinition'
import ThirdLayer from './ThirdLayer'
import './component.css'

const SecondLayer = () => {
  return (
    <div className='Second-Layer'>
      <Context.Consumer>
      { value => 
        <div className='Second-Layer-textContainer'>
          <p className='Text' >{value.wordState}</p> 
        </div>
      }
      </Context.Consumer>
      <ThirdLayer />
    </div>
  )
}

export default SecondLayer