import React ,{ Component }from 'react';
import {MyContext} from '../customPlugins/modulesES6/utils/context';
//常规react组件
class child_eventBook extends Component{
    name="child_eventBook";
    constructor(props){
        super(props);
        this.state={
            name:"child_eventBook_Consumer",
        }
        console.log("===========3.child_eventBook==========");
        console.log("_self:",this);
    }
    componentWillReceiveProps(){
        console.log("Consumer_componentWillReceiveProps()孙子函数");  
    }
    render(){
        console.log("Consumer_render()孙子函数");
        return(
            <div>
                <h2>{this.state.name}</h2><hr/>
                <MyContext.Consumer>
                {
                    //Provider组件中的共享数据
                    (contextValue)=>{
                        console.log("Consumer_value:",contextValue);
                        return <p>孙子组件:{contextValue.username}</p>
                    }
                }
                </MyContext.Consumer>
            </div>
        )
    }
    componentDidMount(){
        //console.log("child_eventBook Context",MyContext);
    }
}
export default child_eventBook;