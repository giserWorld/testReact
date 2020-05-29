/*************************表单元素************************/
import React ,{ Component }from 'react';

import Test_component1 from '../../testReact/test_component1';
/*****************************react组件执行顺序**********************************
 *1.父子组件中各个方法调用顺序：
 *  1)父级组件-constructor():当父级组件加载时，先被实例化
 *  2)父级组件-render():渲染父级组件的“html元素”
 *  3)测试子组件-constructor():按顺序实例化父级组件包含的子组件
 *  4)测试子组件-render():子组件“html元素”进行加载显示
 *  5)测试子组件-componentDidMount():子组件挂载显示完成
 *  6)父级组件-componentDidMount():父组件加载显示完成
 */
class index  extends Component{
    state={
        name:"index",
    }
    constructor(props){
        super(props);
        console.log("父级组件-constructor()");
    }
    render(){
        console.log("父级组件-render()");
        return(
            <div className="wrap">
                <Test_component1></Test_component1>
            </div>
        )
    }
    componentDidMount(){
        console.log("父级组件-componentDidMount()");
    }
}
export default index;
