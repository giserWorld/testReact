import React ,{ Component }from 'react';

//rnd拖动组件
import Rnd_index from '../rnd/index';
//react
import ReactDOM_render from './reactDOM_render';
import React_createElement from './React_createElement';
import Component_function from './component_function';
import React_scss from './react_scss';
import React_props_children from './react_props_children';
import AjaxRequest_data from './ajaxRequest_data';
//代码分割
import LazyLoad_import from './react_lazyLoad/lazyLoad_import()';
import React_lazy from './react_lazyLoad/react_lazy()';


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
              <React_lazy name={this.state.name}/>
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default reactViewer;