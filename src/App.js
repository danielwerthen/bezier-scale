import React, { Component } from 'react';
import './App.css';
import Viewport from './Viewport';
import NoteOutput from './NoteOutput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Viewport />
        <NoteOutput />
      </div>
    );
  }
}

export default App;
