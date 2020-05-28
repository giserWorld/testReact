/**************************路由器组件************************/
import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';//hash模式路由
import { BrowserRouter as Router} from "react-router-dom";//history模式路由


//组件
import reactViewer from '../components/react/reactViewer';
import ant from '../viewers/antViewer/index';
//路由器组件
const router=()=>(
    <HashRouter>
        <Switch>
            {/* react */}
            <Route exact path="/" component={reactViewer}/>
            {/* ant */}
            <Route exact path="/ant" component={ant}/>
        </Switch>
    </HashRouter>
);
export default router;