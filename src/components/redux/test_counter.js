import React ,{ Component }from 'react';
import { connect } from 'react-redux'
//纯的 UI 组件
class Counter extends Component {
    render() {
      const { value, onIncreaseClick } = this.props;//从属性中获取参数
      return (
        <div>
          {/*需要从state计算得到*/}
          <span>{value}</span><p/>
          {/*用户交互，需要向外发出 Action*/}
          <button onClick={onIncreaseClick}>Increase</button>
        </div>
      )
    }
}//e

//从外部获取数据
function mapStateToProps(state) {
    var reduxStatus=state;//获取redux所有维护的state数据
    return {
      value: state.counter
    }
}//e

//向外部传递action
function mapDispatchToProps(dispatch) {
    console.dir(dispatch);
    var action={type:"increate",data:"其他数据"};
    return {
      onIncreaseClick: (param) => dispatch.counter.increase("ddd"),//"@rematch/core"框架写法
      //onIncreaseClick: (param) => dispatch(action)//原生redux写法
    }
}//e

export default connect(mapStateToProps,mapDispatchToProps)(Counter);//组件容器