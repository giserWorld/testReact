/**************************路由器组件************************/
import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';//hash模式路由
//import { BrowserRouter as Router} from "react-router-dom";//history模式路由

//react
import reactViewer from '../components/react/reactViewer';
//antDesign
import antViewer from '../components/antDesign/antViewer';
//considerKnowledge
import testViewer from '../components/considerKnowledge/testViewer';
//page
import layout_main from '../viewer/layout_main/layout_main';
//typeScript
import tsViewer from '../components/typeScript/tsViewer';
//redux
import reduxViewer from '../components/redux/reduxViewer';

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