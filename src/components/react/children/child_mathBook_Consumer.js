import React ,{ Component }from 'react';
import {MyContext} from '../customPlugins/modulesES6/utils/context';
import Child_eventBook from './child_eventBook_Consumer';

//常规react组件
class child_mathBook extends Component{
    //指定 contextType 读取当前的 theme context,React 会往上找到最近的 theme Provider，然后使用它的值
    //static contextType = ThemeContext;
    constructor(props){
        super(props);
        this.state={
            name:"child_mathBook_Consumer",
        }
        console.log("===========2-1.child_mathBook==========");
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
                    <Child_eventBook/>
                </div>
                <div>
                    <MyContext.Consumer>
                        {
                            (value)=>{
                                return <p>儿子组件:{value.username}</p>
                            }
                        }
                    </MyContext.Consumer>
                </div>
            </div>
        )
    }
    componentDidMount(){
        let reactContex=this.context;
    }
}
export default child_mathBook;