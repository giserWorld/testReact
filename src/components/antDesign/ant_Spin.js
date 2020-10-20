import React ,{ Component }from 'react';
import { Divider } from 'antd';
import { Spin } from 'antd';

/*****************************ant_Spin**********************************
 *1.用于页面和区块的加载中状态
 *2.页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑
 */
class ant_Spin extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"ant_Spin",
            spinning:true
        }
    }
    //点击函数
    clickFun=()=>{
        this.setState({
            spinning:false
        });
    }//e
    render(){
        return(
            <div className="wrap">
                <h2>{this.state.name}</h2><Divider/>
                <button onClick={this.clickFun}>更新状态</button>
                <div style={{textAlign:"center"}}>
                    <Spin
                        spinning={this.state.spinning} //是否为加载中状态
                    />
                </div>
            </div>
        )
    }
    componentDidMount(){
          
    }
}
export default ant_Spin;
