import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./App').default;
import './index.css';

const { Provider } = require('react-redux');
const create = require('./redux/create').default;

const store = create({
  points: {
    anchor0: [0,0],
    anchor1: [1,1],
    handle0: [0.2,0.3],
    handle0Offset: [0.3,0.2],
    handle1: [0.7,0.8],
    handle1Offset: [0.8,0.7],
  },
  settings: {
    curveCount: 1,
    notes: ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G'],
    beatsPerBar: 4,
    lowestNoteValue: 0.25,
    bars: 4,
    noteCount: 5,
    lineCount: 10,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

if (process.env.NODE_ENV !== 'production') {
  const Perf = require('react-addons-perf'); // eslint-disable-line global-require

  window.Perf = Perf;
}
