/**************************路由器组件************************/
import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';//hash模式路由
//import { BrowserRouter as Router} from "react-router-dom";//history模式路由
import loadable from '@loadable/component';

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
        </Switch>
    </Router>
);
export default router;