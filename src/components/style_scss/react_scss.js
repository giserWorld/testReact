import React ,{ Component }from 'react';
import st from './scss/scssStyle.module.scss';
/**************************scss样式文件**********************
 *
 **/
class reactScss extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"scss样式文件",
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2><hr/>
                <p className={st.title}>username:</p>
                <p  className={st.fontstyle}>小明</p>
            </div>
        )
    }
    componentDidMount(){
        console.log("scss模块系统:",st);
    }
}
export default reactScss;