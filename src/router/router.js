/**************************路由器组件************************/
import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';//hash模式路由
//import { BrowserRouter as Router} from "react-router-dom";//history模式路由
import loadable from '@loadable/component';

//es6
const es6Viewer=loadable(() => import('../components/ES6/es6Viewer'));
//react
const reactViewer=loadable(() => import('../components/react/reactViewer'));
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
//路由器组件
const router=()=>(
    <Router>
        <Switch>
            {/* react */}
            <Route exact path="/" component={reactViewer}/>
            <Route exact path="/index" component={layout_main}/>
            <Route exact path="/react" component={reactViewer}/>
            {/* antDesign */}
            <Route exact path="/ant" component={antViewer}/>
            {/* considerKnowledge */}
            <Route exact path="/test" component={testViewer}/>
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
        </Switch>
    </Router>
);
export default router;