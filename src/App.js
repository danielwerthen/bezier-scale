import React, { Component } from 'react';
import './App.css';
import Viewport from './Viewport';
import NoteOutput from './NoteOutput';
import notify from './notify';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Viewport {...this.props} />
        <NoteOutput {...this.props} />
      </div>
    );
  }
}

export default notify(App);
