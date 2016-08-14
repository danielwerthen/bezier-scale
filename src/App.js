import React, { Component } from 'react';
import './App.css';
import Viewport from './Viewport';
import NoteOutput from './NoteOutput';
import Config from './Config';
import notify from './notify';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Viewport {...this.props} />
          <NoteOutput {...this.props} />
          <Config {...this.props} />
        </div>
      </MuiThemeProvider>
    );
  }
}

const Fin = notify(App);

export default Fin;
