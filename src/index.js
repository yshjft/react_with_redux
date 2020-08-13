import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Provider : App이라는 컴포넌트의 상위 컴포넌트, react-redux에서 제공하는 컴포넌트
import {Provider} from 'react-redux';
// Provider라는 컴포넌트는 반드시 store라는 props를 공급 받아야 한다.
// 따라서 각각의 컴포넌트가 redux의 store를 따로 import할 필요 없다. 
import store from "./store"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
