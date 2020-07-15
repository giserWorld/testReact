import React, { Component } from 'react';
import Router from './router/router';
import 'antd/dist/antd.css';
// 根组件，挂载路由
class App extends Component {
  render() {
    return (
      <div className="wrap">
          <Router/>
      </div>
    );
  }
}
export default App;
