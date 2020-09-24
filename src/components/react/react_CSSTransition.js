import React ,{ Component }from 'react';
import {CSSTransition} from 'react-transition-group';//导入css过渡组件
/**************************CSSTransition**********************
 *1."react-transition-group"包是一个基于TransitionGroup的高级API,"npm install react-transition-group"
 *2.通过CSSTransitionGroup,当一个React组件添加或者移除一个DOM的时候可以轻易的实现CSS动画
 *3.<CSSTransition>里面的标签可以做对应的运动
 *4.CSSTransition属性:
    1)in:用来判断该容器内容是隐藏或显示(当in的值为true就开始执行入场动画，in的值为false就开始执行出场动画) 
    2)timeout:动画过渡的执行时间
    3)classNames:动画class的前缀名,动画的class名称，为了描述具体动画做准备
    4)unmountOnExit:隐藏会移除这个dom
    5)appear:页面渲染时是否执行动画——布尔值
  *5.classNames动画过渡类:
    1).xxx-enter —— 入场动画的第一帧
    2).xxx-enter-active —— 入场动画的第二帧到动画结束
    3).xxx-enter-done —— 动画执行完成后
    4).xxx-exit —— 出场动画的第一帧
    5).xxx-exit-active —— 出场动画的第二帧到动画结束
    6).xxx-exit-done —— 动画执行完成后
  *6.appear动画过渡类:
    1).xxx-appear —— 第一次渲染动画的第一帧，一般css和.fade-enter一样
    2).xxx-appear-active —— 第一次渲染动画的第二帧到动画结束，一般css和.fade-enter-active一样
  *7.通过react-transition-group里面的CSSTransition实现动画过渡
 **/
class react_CSSTransition extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"react_CSSTransition",
            showStatus:true,
        }
    }
    render(){
        return(
            <div>
                {/* 使用CSSTransition将需要动画的元素包裹起来 */}
                <CSSTransition
                    in={this.state.showStatus}//用来判断该容器内容是隐藏或显示(rue为显示,false为隐藏)  
                    timeout={1000}//动画执行的时间
                    classNames='fale_animation'//动画class的前缀名
                    unmountOnExit//隐藏会移除这个dom
                >
                    <div className="react动画内容">
                        这个是CSSTransition动画的内容！
                    </div>
                </CSSTransition>
                <div>
                    <button id="btn1" onClick={this.clickFun}>更新动画过渡</button>
                </div>
            </div>
        )
    }
    //点击回调
    clickFun=()=>{
       this.setState({
         showStatus:!this.state.showStatus
       }); 
    }

    componentDidMount(){

    }
}
export default react_CSSTransition;