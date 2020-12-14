import React from 'react';
import {Route, Switch} from 'react-router-dom';//hash模式路由
//import { BrowserRouter as Router} from "react-router-dom";//history模式路由

import EnglishBook from '../components/react/children/englishBook';
import ChinaBook_withRouter from '../components/react/children/chinaBook_withRouter';
//路由器组件
const secRouter=()=>(
    <Switch>
        <Route 
            // 一级路由包含匹配url,
            path="/test" 
            render={()=>{
                return (
                    <Switch>
                        {/* 二级路由精确(包含)匹配url */}
                        <Route path="/test/index" exact component={ChinaBook_withRouter}></Route>
                        <Route path="/test/englishBook" exact component={EnglishBook}></Route>
                    </Switch>
                )
            }}
        />
    </Switch>
);
export default secRouter;