import React ,{ Component }from 'react';

//rnd拖动组件
import Rnd_index from '../rnd/index';
//resizable组件
import React_resizable from '../react_resizable';
//代码分割
import LazyLoad_import from './react_lazyLoad/lazyLoad_import()';
import React_lazy from './react_lazyLoad/react_lazy()';
import React_loadable from './react_lazyLoad/react-loadable';
//函数式组件
import React_ts_FC from './functionComponent/react_ts_FC';
import Component_function from './functionComponent/component_function';
import Parent_book from './functionComponent/parent_book';
//react
import ReactDOM_render from './reactDOM_render';
import React_createElement from './React_createElement()';
import React_scss from './react_scss';
import React_props_children from './react_props_children';
import AjaxRequest_data from './ajaxRequest_data';
import Plugin_left_right_switch from './plugin_left_right_switch';
import Test_props_update from './test_props_update';
import Form_input from './form_input';
import Form_select from './form_select';
import Form_textarea from './form_textarea';
import Ract_withRouter from './react_withRouter';
import React_refs from './react_refs';
import React_EventEmitter from './react_EventEmitter';
import React_createContext from './react_createContext()_Provider';
import React_CSSTransition from './react_CSSTransition';
import ReactToPrint from './reactToPrint';
import React_setState from './react_setState()';

class reactViewer extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"reactViewer"
        }
    }
    render(){
        return(
            <div className="wrap">
              <React_setState name={this.state.name}/>
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default reactViewer;