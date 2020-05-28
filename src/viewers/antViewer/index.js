/**************************ant视图************************/
import React ,{ Component }from 'react';//核心组件类,每一个组件中必须包含该类

import Button_ant from '../../components/ant/button';
import Ant_Cascader from '../../components/ant/ant_Cascader';
//地图组件
class index extends Component{
    state={
        name:"ant"
    }
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="wrap" style={{padding:"5px"}}>
               <Ant_Cascader></Ant_Cascader>
            </div>
        )
    }
    componentDidMount(){
        
    }
    
}
export default index;