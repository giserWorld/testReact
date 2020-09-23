import React ,{ Component }from 'react';
/***********************index************************
 *1.
 */
//定义props实现的接口
interface Props {
    name?: string;
    enthusiasmLevel?: number;
}
//定义state实现的接口,即定义"this.state"的字段数据类型
interface State {
    name?: string,
    age?: number,
}
//定义该组件可以使用的接口数据类型
class index extends Component<Props,State>{
    constructor(props:any){
        super(props);
        this.state={//该对象必须实现State接口
            name:"index",
        }
    }
    render(){
        return(
            <div className="wrap">
              {this.state.name}  
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default index;