import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main/Index';
import TrioBox from './Components/TrioBox/Index';
import Intro from './Components/Intro/Index';

class App extends Component {
  render() {
    return (
      <div >
        <Main/>
        <TrioBox/> 
        <Intro/>
      </div>
    )
 }
}
export default App;

