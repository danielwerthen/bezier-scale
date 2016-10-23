import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CurveControl from './CurveControl';
import Viewport from './components/viewport';
import Curves from './components/curves';
import NoteOutput from './NoteOutput';
import ConfigBase from './Config';
import connectConfig from './connect-config';
import NoteLines from './note-lines';

const Config = connectConfig(ConfigBase);

const controlsFrameStyle = {
  position: 'absolute',
  width: '100%',
  top: '100%',
  left: 0,
};

function Controls() {
  return (<div style={controlsFrameStyle}>
    <Config />
  </div>);
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Viewport>
            <NoteLines />
            <Curves />
            <CurveControl />
          </Viewport>
          <Controls />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
