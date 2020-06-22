/**************************react渲染************************/
import React ,{ Component }from 'react';
import $ from 'jquery';
class index extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"react渲染",
            id:"1"
        }
        this.count=0;
    }
    render(){
        this.count++;
        return(
            <div className="wrap">
                <h2>{this.state.name},{this.count}</h2>
                <p>
                    <button ref="btn1" id="btn2">调用setState()</button>
                </p>
            </div>
        )
    }
    componentDidMount(){
        let _self=this;
        _self.refs.btn1.onclick=_self.changeState;
        console.log("***********react组件************");
        console.log(this);
        console.log("***********jquery************");
        console.log($("#btn2"));
    }
    //改变state状态
    changeState(){
        this.setState({});
    }
}
export default index;