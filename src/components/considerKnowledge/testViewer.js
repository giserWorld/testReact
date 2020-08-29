import React ,{ Component }from 'react';
//packageES6
// import Package_qs from './packageES6/package_qs';

//router路由
// import Test_basic_Routing from './react/react-router-dom/basic_Routing';
// import Test_nested_routing from './react/react-router-dom/nested_routing';
import Router_param from './react/react-router-dom/router_param';

//生命周期函数
//import Lifecycle_componentWillReceiveProps from './react/lifecycle_componentWillReceiveProps';//componentWillReceiveProps
import Lifecycle_componentDidUpdate from './react/lifecycle_componentDidUpdate';//componentDidUpdate
//import Lifecycle_componentWillMount from './react/lifecycle_componentWillMount';//componentWillMount
//import Lifecycle_componentWillUnmount from './react/lifecycle_componentWillUnmount';//componentWillMount

//react
// import Test_Component_Fun from './react/test_Component_Fun';
// import Test_htmlTag_a from './react/test_htmlTag_a';
// import Test_react_Fragment from './react/react_Fragment';
// import Test_router_to_url from './react/router_to_url';
// import React_jsx_htmlDom from './react/react_virtualDom_htmlDom';
// import Test_define_jsx_variable from './react/test_define_jsx_variable';
//import React_optimization_Loadable from './react/react_optimization_Loadable()';


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
                <Router_param/>
            </div>
        )
    }
    componentDidMount(){

    }
}
export default testViewer;
