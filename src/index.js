import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/AppContainer';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';

ReactDOM.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
