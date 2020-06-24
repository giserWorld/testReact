import React ,{ Component }from 'react';
/***********************tsx组件************************
 *1.Props为"this.props"的数据类型
 *2.object"this.state"的数据类型
 */
//定义props实现的接口
interface Props {
    name: string;
    enthusiasmLevel?: number;
}
//定义state实现的接口
interface State {
    age: number,
    name: string,
}
//定义该组件可以使用的接口数据类型
class index extends Component<Props,State>{
   
    constructor(props:any){
        super(props);
        this.state={//该对象必须实现State接口
            name:"tsViewer",
            age:20,
        }
    }
    render(){
        return(
            <div className="wrap">
              {/* {this.state.name}   */}
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default index;