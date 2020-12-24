/**************************路由器组件************************/
import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';//hash模式路由
//import { BrowserRouter as Router} from "react-router-dom";//history模式路由
import loadable from '@loadable/component';

//es6
const es6Viewer=loadable(() => import('../components/ES6/es6Viewer'));
//react
const reactViewer=loadable(() => import('../components/react/reactViewer'));
const linkTo_viewer=loadable(() => import('../viewer/linkTo_viewer'));
//jquery
const jqueryViewer=loadable(() => import('../components/react/jquery/jqueryViewer'));
//antDesign
const antViewer=loadable(() => import('../components/antDesign/antViewer'));

//considerKnowledge
const testViewer=loadable(() => import('../components/considerKnowledge/testViewer'),{
    fallback: <div>正在加载...</div>//过程提示
});

//page
const layout_main=loadable(() => import('../viewer/layout_main/layout_main'));
//typeScript
const tsViewer=loadable(() => import('../components/typeScript/tsViewer'));
//redux
const reduxViewer=loadable(() => import('../components/redux/reduxViewer'));
//echarts
const echartsViewer=loadable(() => import('../components/echarts/echartsViewer'));
//testPage
const testPageViewer=loadable(() => import('../components/testPage/testPageViewer'));
//scss
const scssViewer=loadable(() => import('../components/style_scss/scssViewer'));
//router
const router_param=loadable(() => import('../components/considerKnowledge/react/react-router-dom/router_param'));
//路由器组件
const mainRouter=()=>(
    <Router>
        <Switch>
            {/* react */}
            <Route exact path="/" component={linkTo_viewer}/>
            <Route exact path="/index" component={layout_main}/>
            <Route exact path="/react" component={reactViewer}/>
            {/* antDesign */}
            <Route exact path="/ant" component={antViewer}/>
            {/* considerKnowledge */}
            <Route path="/test" component={testViewer}/>
            {/* typeScript */}
            <Route exact path="/ts" component={tsViewer}/>
            {/* redux */}
            <Route exact path="/redux" component={reduxViewer}/>
            {/* es6 */}
            <Route exact path="/es6" component={es6Viewer}/>
            {/* echarts */}
            <Route exact path="/echart" component={echartsViewer}/>
            {/* testPage */}
            <Route exact path="/testPage" component={testPageViewer}/>
            {/* jquery */}
            <Route exact path="/jquery" component={jqueryViewer}/>
            {/* scss */}
            <Route exact path="/scss" component={scssViewer}/>
            {/* router */}

            {/* 1.param路由传参,路由需要特殊格式 */}
            <Route exact path="/router_param/:param" component={router_param}/>{/* 单个路由参数,参数值为字符串，params */}
            <Route exact path="/router_param_multi/:name:username" component={router_param}/>{/* 多个路由参数,参数值为字符串，params */}
            {/* 2.query路由传参 */}
            <Route exact path="/router_query" component={router_param}/>{/* 带有参数的路由,query为对象，query */}
            {/* 3.state路由传参 */}
            <Route exact path="/router_state" component={router_param}/>{/* 带有参数的路由,state为对象，state */}
            {/* 4.search路由传参 */}
            <Route exact path="/router_search" component={router_param}/>{/* 带有参数的路由,search为对象，search */}
        </Switch>
    </Router>
);
export default mainRouter;