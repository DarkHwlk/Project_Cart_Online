import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* import Reducer */
import {createStore} from 'redux';
import appReducers from './reducers/index';
import {Provider} from 'react-redux';

const store = createStore(
  appReducers
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
