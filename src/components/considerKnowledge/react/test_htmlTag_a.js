import React ,{ Component }from 'react';

/********************react组件中使用a标签*********************
 *1.如果在react组件中使用a标签时，不能再href属性中设置"javascript:void(0)"
 *如果设置该值，则react会出现一个警告提示，我们可以通过以下代码实现相同的效果：
    <a href="#" onClick={(e)=>{e.preventDefault();}}><a/>
 *2.
 */
class test_htmlTag_a extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"a标签",
        }
    }
    render(){
        return(
            <div className="wrap">
              <a href="#" onClick={(e)=>{e.preventDefault()}}>
                  这是a标签
              </a><p/>
              <a onClick={(e)=>{e.preventDefault()}}>
                  这是a标签2
              </a>
            </div>
        )
    }
    componentDidMount(){
      
    }
}
export default test_htmlTag_a;
