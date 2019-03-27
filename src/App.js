import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Travel from './components/Travel';
import Travels from './components/Travels';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Trendy destinations for this summer</h1>
        </header>
      <Travel
        destination = "Edinburgh"
        country = "Scotland"
        photo = "https://amp.businessinsider.com/images/553fe0896bb3f791400ff12c-1136-851.jpg"
        distance = "1096 km"
      />
      <Travel
        destination = "Madrid"
        country = "Spain"
        photo = "https://amp.businessinsider.com/images/5540205f6da8119e58ad0cec-1334-1000.jpg"
        distance = "1275 km"
      />
      <Travels/>
      </div>
    );
  }
}

export default App;
