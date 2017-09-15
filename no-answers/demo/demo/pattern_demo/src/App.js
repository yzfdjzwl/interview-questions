import React, { Component } from 'react';
import './App.css';
import CurItemPane from './Children/CurItemPane';
import SelectButtons from './Children/SelectButtons';

class App extends Component {
  render() {
    return (
      <div>
        <CurItemPane />
        <SelectButtons />
      </div>
    );
  }
}

export default App;
