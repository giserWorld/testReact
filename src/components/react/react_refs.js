import React ,{ Component }from 'react';
import ChinaBook from './children/chinaBook_withRouter';
import HistoryBook from './children/historyBook_redux';
/**************************react_refs**********************
 *1.redux会影响react组件的ref的使用,即通过refs获取不到react dom节点
 *2.withRouter会影响react组件的ref的使用,即通过refs获取不到react dom节点
 *3.通过"wrappedComponentRef"属性给withRouter包裹组件添加回调函数,将Component放到refs中即可
    <ChinaBook wrappedComponentRef={c=>(this.refs.ChinaBook=c)}/>
 **/
class react_refs extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"react_refs",
            type:"2"
        }
    }
    clickFun=(type)=>{
        let _self=this;
        let state=null;
        if(type==="切换"){
            this.state.type==="2"?state={type:"1"}:state={type:"2"};
        }
        else if(type==="获取ref"){
            console.log("_self",_self);
        }
        this.setState(state);
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2><hr/>
                <div>
                    <button onClick={()=>{this.clickFun("切换")}}>切换组件类型</button><p/>
                    <button onClick={()=>{this.clickFun("获取ref")}}>获取ref</button><p/>
                </div>
                <div ref="div_container">
                    {
                        this.state.type==="1"?
                        <ChinaBook wrappedComponentRef={c=>(this.refs.ChinaBook=c)}/>:
                        <HistoryBook ref="HistoryBook"/>
                    }
                </div>
                
            </div>
        )
    }
}

export default react_refs;