import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import create from './redux/create';

const store = create({
  curves: [
    {
      value: [0.25, 0.5, 0.75, 0.75, 0, 0, 1, 1],
    },
  ],
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
