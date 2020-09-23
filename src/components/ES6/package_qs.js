import React ,{ Component }from 'react';
import qs from 'qs';

/*********************qs模块(querystring)*****************
 *1.qs模块是用于将url参数和对象参数进行相互转换
 *2.qs模块的stringify()、parse()方法与JSON的stringify()、parse()方法功能是不一样的
 *3.qs.stringify(paramObj):将参数对象转为url参数
    var paramObj={id:"1",name:"user"};
    var urlParam=qs.stringify(paramObj)//"id=1&name=user"
 *4.qs.parse(urlParam):将url参数转为参数对象
    var urlParam="id=25&name=xh&age=25";
    var paramObj=qs.parse(urlParam)//{id:"25",name:"xh",age:"25"}
 */
class test_qs extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"qs模块",
        }
    }
    render(){
        return(
            <div className="wrap">
                <div>
                    <h1>{this.state.name}</h1><br/>
                    <button onClick={this.loadJsFun.bind(this)}>加载js代码</button>
                </div>
            </div>
        )
    }
    loadJsFun(){
        //参数对象
        var paramObj1={
            id:"1",
            name:"user"
        };
        var urlParam1="id=25&name=xh&age=25";

        //1.将参数对象序列化为url参数
        var urlParam=qs.stringify(paramObj1);//“id=1&name=user”
        //2.将url参数解析参数对象
        var paramObj=qs.parse(urlParam1);//{id:"25",name:"xh",age:"25"}
        console.log(paramObj);
    }
    componentDidMount(){
       
    }
}
export default test_qs;