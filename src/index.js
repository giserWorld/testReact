import 'react-app-polyfill/ie9';//兼容IE9及之后的版本
import 'react-app-polyfill/stable';
import 'core-js/es/map';
import 'core-js/es/set';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

//渲染App根组件
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
