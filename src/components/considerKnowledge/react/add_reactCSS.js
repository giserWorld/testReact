/*************************react组件设置样式************************/
import React ,{ Component }from 'react';

/*****************************react组件设置样式**********************************
 *1.行内样式：使用{{  }},“驼峰命名法”，例如:<div style={{color:"red"}}></div>
 *2.在jsx文件中定义样式变量,“驼峰命名法”
 *3.正常写css文件，然后引入,例如：import './index.css'
 */
class index extends Component{
    state={
        name:"react组件设置样式",
        backgroundColor:"red"
    }
    constructor(props){
        super(props);
    }
    render(){
        var style={
            backgroundColor:this.state.backgroundColor,
        };
        return(
            <div className="wrap">
                <div>
                    <h1>{this.state.name}</h1>
                </div>
                <div>
                    <span style={{color:"red"}}>span内联样式</span>
                </div>
                <div>
                    <span style={style}>在jsx文件中定义样式变量</span>
                </div>
            </div>
        )
    }
    componentDidMount(){
          
    }
}
export default index;
