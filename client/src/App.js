import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as RuntimeConfig from './runtimeConfig';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>
            Runtime config variables:
            <ul className="vars">
              <li>Port: {RuntimeConfig.read('port')}</li>
              <li>Value 1: {RuntimeConfig.read('client.value1')}</li>
              <li>Value 2: {RuntimeConfig.read('client.value2')}</li>
              <li>Value 3: {RuntimeConfig.read('value3')}</li>
            </ul>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
