import React ,{ Component }from 'react';

//rnd拖动组件
import Rnd_index from '../rnd/index';
//resizable组件
import React_resizable from '../react_resizable';
//react-slick组件
import React_slick from '../react_slick';
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
import React_api_createElement from './react_api_createElement()';
import React_api_withRouter from './react_api_withRouter()';
import React_props_children from './react_props_children';
import AjaxRequest_data from './ajaxRequest_data';
import Form_input from './form_input';
import Form_select from './form_select';
import Form_textarea from './form_textarea';
import React_refs from './react_refs';
import React_EventEmitter from './react_EventEmitter';
import React_createContext from './react_createContext()_Provider';
import React_CSSTransition from './react_CSSTransition';
import ReactToPrint from './reactToPrint';
import ReactToPrint_js from './reactToPrint_js';
import React_setState from './react_setState()';
import React_qrcode from './react_qrcode';
import React_newWindow from './react_newWindow';
import React_withRouter_redux from './react_withRouter_redux';
//plugin
import Plugin_left_right_switch from './reactTest/plugin_left_right_switch';
import Plugin_Widget_fileLibrary from './reactTest/plugin_widget_fileLibrary';
import Plugin_Widget_filePreview from './reactTest/plugin_widget_filePreview';

//router:"/react"
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
				<React_api_createElement name={this.state.name}/>                      
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default reactViewer;