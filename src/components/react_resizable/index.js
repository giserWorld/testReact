import React ,{ Component }from 'react';
import { Resizable, ResizableBox } from 'react-resizable';
import './index.scss';
/**************************react-resizable*********************
 *1.可以通过一个或多个手柄调整大小
 *2.一个可调整大小的React组件
 **************************属性**********************
 *1.
 **/

class react_resizable extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"react_resizable",
        }
    }
    render(){
        const style = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #ddd",
            background: "#f0f0f0"
        };
        return(
            <div>
                <h2>{this.state.name}</h2><hr/>
                <ResizableBox
                    style={style}
                    width={200}
                    height={200}
                >
                    <span>001</span>
                </ResizableBox>
            </div>
        )
    }
    componentDidMount(){

    }
}
export default react_resizable;