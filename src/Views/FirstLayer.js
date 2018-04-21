import React from 'react';

import ContextProvider from '../ContextProvider.js'
import SecondLayer from './SecondLayer'
import logo from '../logo.svg';
import './component.css';


const FirstLayer = () => {
  return (
    <ContextProvider>
      <div className="First-Layer">
        <header className="First-Layer-header">
          <img src={logo} className="First-Layer-logo" alt="logo" />
          <h1 className="First-Layer-title">Welcome to My React Context API Playground </h1>
        </header>
        <div className='First-Layer-Body-container'>
          <SecondLayer />
        </div>
      </div>
    </ContextProvider>
  )
}

export default FirstLayer
