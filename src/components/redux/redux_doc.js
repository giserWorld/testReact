import React ,{ Component }from 'react';
/**************************redux-doc**********************
 *1.当redux中的状态属性值改变时,不是所有相关的react组件都会触发componentWillReceiveProps()方法
    只有与改变的redux属性相关的react组件，才会触发componentWillReceiveProps()方法,即react组件中
    "mapStateToProps"中是否包含redux变化的变量属性,与"mapDispatchToProps"无关
 *2.当redux状态变量变化的值是相同的，则不会触发componentWillReceiveProps方法
 *3.使用redux状态机制,如果不关闭应用,则redux仓库的属性值不会发生变化,如果想回到初始状态时，主要进行页面时手动改变其值即可
 *4.使用redux管理状态数据时，注意恢复初始状态数据
 *5.react组件连接redux时,如果mapStateToProps中返回的数据没有变化,则不会触发组件componentWillReceiveProps()和render()函数
 *6.组件是否重新render()关键在于mapStateToProps传递的props值是否发生变化
 *7.不会自动清理。如果要清理，需要手动在 componentWillUnmount 处理
 *8.redux仓库状态属性值发生改变后，redux会一直保留该状态数据，除非刷新页面或手动重置状态数据(componentWillUnmount)
 *9.页面刷新后redux状态仓库会重新构建,数据变为初始状态
 **/
class index extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"index",
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2>
            </div>
        )
    }
    componentDidMount(){

    }
}
export default index;