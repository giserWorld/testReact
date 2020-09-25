import React ,{ Component }from 'react';
import {MyContext} from '../customPlugins/utils/context';
/**************************react_contextType**********************
 *1.react组件指定contextType属性时,该组件会往上找到最近的Context Provider,然后使用它的值到组件的"context"属性中
 *2.contextType使用方法:
    1)通过"static contextType=MyContext"静态属性赋值(推荐,简单)
    2)通过"Component.contextType=MyContext;"函数对象赋值
 */
//常规react组件
class child_mathBook_contextType extends Component{
    static contextType=MyContext;//Context数据
    constructor(props){
        super(props);
        this.state={
            name:"child_mathBook_contextType",
        }
        console.log("===========2-2.child_mathBook_contextType==========");
        console.log("_self:",this);
    }
    componentWillReceiveProps(){
        console.log("Consumer_componentWillReceiveProps()子函数");  
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2><hr/>
                <div>
                    <p>儿子组件:{this.context.username}</p>
                </div>
            </div>
        )
    }
    componentDidMount(){
        
    }
}//e
//child_mathBook_contextType.contextType = MyContext;
export default child_mathBook_contextType;