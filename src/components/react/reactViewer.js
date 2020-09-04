import React ,{ Component }from 'react';

//rnd拖动组件
import Rnd_index from '../rnd/index';
//代码分割
import LazyLoad_import from './react_lazyLoad/lazyLoad_import()';
import React_lazy from './react_lazyLoad/react_lazy()';
import React_loadable from './react_lazyLoad/react-loadable';

//react
import ReactDOM_render from './reactDOM_render';
import React_createElement from './React_createElement';
import Component_function from './component_function';
import React_scss from './react_scss';
import React_props_children from './react_props_children';
import AjaxRequest_data from './ajaxRequest_data';
import Plugin_left_right_switch from './plugin_left_right_switch';
import Test_props_update from './test_props_update';
import Form_input from './form_input';
import Form_select from './form_select';
import Form_textarea from './form_textarea';


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
              <Form_textarea name={this.state.name}/>
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default reactViewer;