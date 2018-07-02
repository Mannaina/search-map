import React, { Component } from 'react';
//import logo from './logo.svg';
import Search from './Components/Search/Search';
import Map from './Components/Map/Map'
import {Googlemap} from './Components/Map/Googlemap'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Search/>
        <Map/>
        <Googlemap/>
      </div>
    );
  }
}
