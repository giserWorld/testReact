import React ,{ Component }from 'react';
import { Rnd } from 'react-rnd'
/**************************rnd**********************
 *1.一个可调整大小且可拖动的React组件。
 *2.rnd全称为"resizable and draggable"
 **************************属性**********************
 *1.position(object):显示位置,例如:{ x: number, y: number }
 **/
class rnd_index extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"rnd_index",
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2><hr/>
                <Rnd 
                    default={{x: 500,y: 100,width: 320,height: 200}}
                    style={{border:"1px solid red"}}
                >
                    001 
                </Rnd>
            </div>
        )
    }
    componentDidMount(){

    }
}
export default rnd_index;