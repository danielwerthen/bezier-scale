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
  curves: [
    {
      value: [0.25, 0.5, 0.75, 0.75, 0, 0, 1, 1],
    },
  ],
  beatsPerBar: 4,
  lowestNoteValue: 0.25,
  bars: 4,
  lineCount: 10,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
