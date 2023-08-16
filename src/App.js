import './App.css';

import React, { Component } from 'react'
import Header from './Components/Header';
import Newsfile from './Components/Newsfile';

export default class App extends Component {
  render() {
    
    return (
      
      <div>
       <Header title="Crow Daily"/> 
       <Newsfile/>
       </div>
    )
  }
}
