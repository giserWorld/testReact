import React ,{ Component }from 'react';

import EchartsTest from './test';
import Rreact_line from './react_line';
//test
import Test_line from './test_line';
import Test_pie from './test_pie';//饼图
import './css/myEcharts.scss';

class echartsViewer extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"echartsViewer"
        }
    }
    render(){
        return(
            <div className="wrap">
                <Test_pie/>
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default echartsViewer;