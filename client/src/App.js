import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as RuntimeConfig from './runtimeConfig';
import { read as reatConfigStatic } from './runtimeConfigStatic';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      port: 0,
      value1: 0,
      value3: 0,
    };
  }

  componentValueFromConfig = variableName =>
    RuntimeConfig.read(variableName).then(value => this.setState({ [variableName]: value }));

  componentDidMount() {
    this.componentValueFromConfig('port');
    this.componentValueFromConfig('value1');
    this.componentValueFromConfig('value3');
  }

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
              <li>Port: {this.state.port}</li>
              <li>Value 1: {this.state.value1}</li>
              <li>Value 2: {reatConfigStatic('value2')}</li>
              <li>Value 3: {this.state.value3}</li>
            </ul>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
