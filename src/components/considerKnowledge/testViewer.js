import React ,{ Component }from 'react';
//packageES6
// import Package_qs from './packageES6/package_qs';

//router路由
// import Test_basic_Routing from './react/react-router-dom/basic_Routing';
import Route_nested from './react/react-router-dom/route_nested';
import Router_param from './react/react-router-dom/router_param';
import Tab_route_props from './react/react-router-dom/tab_route_props';//<router>标签属性
import Tab_router_config from './react/react-router-dom/tab_router_config';//Router路由器配置说明
import Router_secRouter from './react/react-router-dom/router_secRouter';//二级路由配置
import Router_link from './react/react-router-dom/router_link';

//生命周期函数
import Lifecycle_componentWillReceiveProps from './react/lifecycle_componentWillReceiveProps';//componentWillReceiveProps
import Lifecycle_componentWillReceiveProps_new from './react/lifecycle_componentWillReceiveProps_new';
import Lifecycle_componentDidUpdate from './react/lifecycle_componentDidUpdate';//componentDidUpdate
//import Lifecycle_componentWillMount from './react/lifecycle_componentWillMount';//componentWillMount
//import Lifecycle_componentWillUnmount from './react/lifecycle_componentWillUnmount';//componentWillMount

//react
// import Test_Component_Fun from './react/test_Component_Fun';
import Test_htmlTag_a from './react/test_htmlTag_a';
// import Test_react_Fragment from './react/react_Fragment';
// import Test_router_to_url from './react/router_to_url';
// import React_jsx_htmlDom from './react/react_virtualDom_htmlDom';
// import Test_define_jsx_variable from './react/test_define_jsx_variable';
//import React_optimization_Loadable from './react/react_optimization_Loadable()';
import Redux_page from './react/redux_page';

//route:"/test"
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
                <Router_link name={this.state.name}/>
            </div>
        )
    }
    componentDidMount(){

    }
}
export default testViewer;
