import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLink from './components/link/ImageLinkForm';
import Rank from './components/rank/Rank';
import 'tachyons';
import './App.css';
import Particles from 'react-particles-js';

const particlesOption={
    particles: {
      number:{
        value:70,
        density:{
          enable:true,
          value_area:800
        }
      }
    }
  }
class App extends Component{
  render(){
    return (
      <div className="App">
        <Particles className="particles"
        params={particlesOption}/>
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLink/>
        {/* <face Recogntion></face> */} 
      </div>
    )
  }
}
export default App;
