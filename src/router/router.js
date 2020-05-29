/**************************路由器组件************************/
import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';//hash模式路由
//import { BrowserRouter as Router} from "react-router-dom";//history模式路由

//react
import reactViewer from '../components/react/reactViewer';
//antDesign
import antViewer from '../components/antDesign/antViewer';
//considerKnowledge
import testViewer from '../components/considerKnowledge/testViewer';
//page
import layout_main from '../viewer/layout_main/layout_main';

//路由器组件
const router=()=>(
    <HashRouter>
        <Switch>
            {/* react */}
            <Route exact path="/" component={layout_main}/>
            <Route exact path="/index" component={layout_main}/>
            {/* antDesign */}
            <Route exact path="/ant" component={antViewer}/>
            {/* considerKnowledge */}
            <Route exact path="/test" component={testViewer}/>
        </Switch>
    </HashRouter>
);
export default router;