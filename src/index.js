import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import App from './App'
import { Provider } from 'react-redux'
import configureStore from './state/store/configureStore'
import Axios from "axios";

Axios.defaults.baseURL = "https://newsapi.org/v2";

const store = configureStore()
window.store = store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
