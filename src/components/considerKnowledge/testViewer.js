import React ,{ Component }from 'react';
//packageES6
import Package_qs from './packageES6/package_qs';
//react
import Test_Component_Fun from './react/test_Component_Fun';
import Test_htmlTag_a from './react/test_htmlTag_a';
import Test_react_Fragment from './react/react_Fragment';
import Test_router_to_url from './react/router_to_url';
//router
import Test_basic_Routing from './react/react-router-dom/basic_Routing';
import Test_nested_routing from './react/react-router-dom/nested_routing';
//componentWillReceiveProps声明周期函数
import Lifecycle_componentWillReceiveProps from './react/lifecycle_componentWillReceiveProps';
//componentDidUpdate声明周期函数
import Lifecycle_componentDidUpdate from './react/lifecycle_componentDidUpdate';
import Test_define_jsx_variable from './react/test_define_jsx_variable';

class testViewer extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"considerKnowledge视图",
        }
    }
    render(){
        return(
            <div className="considerKnowledge">
                <Test_basic_Routing/>
            </div>
        )
    }
    componentDidMount(){

    }
}
export default testViewer;
