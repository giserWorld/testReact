/*************************父子组件双向绑定************************/
import React ,{ Component }from 'react';

/*****************************父子组件双向绑定(非组件内部)**********************************
 *1.为了实现父子组件状态属性双向绑定，则父组件需要给子组件设置“value”和“onChange”属性
 *父组件需要设置如下:
 *<childCom value={this.state.newsValue} 
            onChange={this.handelChange.bind(this,"newsValue")}>
 </childCom>
 *2.子组件需要设置如下：
 *  1)实例化时,constructor(props){this.state={value:props.value}}
 *  2)设置“handelChange”方法，保持子组件内的双向绑定
 *  3)设置"shouldComponentUpdate"方法,保持"Props"和"State"变量值保持一致
 */

import News from '../childComponent/news';
class index extends Component{
    state={
        name:"父子组件双向绑定",
        newsValue:"88",//绑定子组件
    }
    constructor(props){
        super(props);
    }
    //html元素、react组件绑定状态属性(单向、双向绑定属性方法),
    handelChange(name,e_value){//e:"e.target"或组件value值
        let key=name || "";
        let value=e_value.target ? e_value.target.value : e_value;
        let state={};
        state[key]=value;
        console.log(state);
        if(key)this.setState(state);
        if(this.props.onChange)this.props.onChange(value);//子组件绑定
    }
    render(){
        return(
            <div className="wrap">
                <div>
                    <h1>{this.state.name}</h1>
                    <input type="text" value={this.state.newsValue}
                                       onChange={this.handelChange.bind(this,"newsValue")}></input>
                </div>
                <div>
                     <News value={this.state.newsValue}
                           onChange={this.handelChange.bind(this,"newsValue")}
                            ></News>
                </div>
            </div>
        )
    }
    componentDidMount(){
          
    }
}
export default index;
