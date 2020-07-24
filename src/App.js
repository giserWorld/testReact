import React, { Component } from 'react';
import MainRouter from './router/router';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import store from './store/store';
//import store from './store/store_redux';

// 根组件，挂载路由
class App extends Component {
  render() {
    return <Provider store={store}><MainRouter/></Provider>
  }
}
export default App;
