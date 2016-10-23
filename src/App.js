import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CurveControl from './CurveControl';
import Viewport from './components/viewport';
import Curves from './components/curves';
import ConfigBase from './Config';
import connectConfig from './connect-config';
import NoteLines from './note-lines';
import BarLines from './bar-lines';
import NoteOutput from './note-output';

const Config = connectConfig(ConfigBase);

const controlsFrameStyle = {
  position: 'absolute',
  width: '100%',
  top: '100%',
  left: 0,
};

function Controls() {
  return (<div style={controlsFrameStyle}>
    <NoteOutput />
    <Config />
  </div>);
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Viewport>
            <BarLines />
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
