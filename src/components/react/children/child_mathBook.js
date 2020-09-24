import React ,{ Component }from 'react';
import Child_eventBook from './child_eventBook';

//常规react组件
class child_mathBook extends Component{
    name="child_mathBook";
    //指定 contextType 读取当前的 theme context,React 会往上找到最近的 theme Provider，然后使用它的值
    //static contextType = ThemeContext;
    render(){
        return(
            <div>
                <h2>{this.name}</h2><hr/>
                <div>
                    <Child_eventBook/>
                </div>
            </div>
        )
    }
    componentDidMount(){
        let reactContex=this.context;
        console.log("child_mathBook:",this);
    }
}
export default child_mathBook;