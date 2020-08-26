import React ,{ Component }from 'react';

import('./test_math').then(function(math){
    console.log(math);
});

/**************************lazyLoad_import**********************
 *1.通过import().then(function(){})方式实现懒加载,当 Webpack 解析到该语法时，会自动进行代码分割
 *2.比较繁琐
 **/
class lazyLoad_import extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"lazyLoad_import",
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2><hr/>
            </div>
        )
    }
    componentDidMount(){

    }
}
export default lazyLoad_import;