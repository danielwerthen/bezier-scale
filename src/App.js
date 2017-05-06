import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CurveControl from './CurveControl';
import SlideAdjusted from './components/slide-adjusted';
import Curves from './components/curves';
import Drawer from './components/drawer';
import ConfigBase from './Config';
import connectConfig from './connect-config';
import NoteLines from './note-lines';
import BarLines from './bar-lines';
import NoteOutput from './note-output';
import autoSize from './auto-size';

const Config = connectConfig(ConfigBase);

const controlsFrameStyle = {
  position: 'absolute',
  width: '100%',
  left: 0,
};

function Controls() {
  return (<div style={controlsFrameStyle}>
    <NoteOutput />
    <Drawer>
      <Config />
    </Drawer>
  </div>);
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <SlideAdjusted {...this.props}>
            <BarLines />
            <NoteLines />
            <Curves />
            <CurveControl />
          </SlideAdjusted>
          <Controls />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default autoSize(App);
