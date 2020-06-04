import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CitySearch from './components/citySearch.js'


class App extends Component {
  render(){
  return (
    <div>
    <CitySearch/>
    </div>
    );
  }
}

export default App;
