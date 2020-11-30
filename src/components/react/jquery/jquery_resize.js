import React ,{ Component }from 'react';
import $ from 'jquery';
import '../customPlugins/modulesES6/jquery.ba-resize-1.1-my';
/**************************jquery_onresize**********************
 *
 **/
class jquery_onresize extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"jquery_onresize",
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2><hr/>
                <div>
                    <div id="boxDiv1" style={{border:"1px solid red",width:"300px",height:"300px"}}>

                    </div>
                    <button id="changeSize">改变容器大小</button>
                </div>
            </div>
        )
    }
    componentDidMount(){
        //改变容器大小
        $("#changeSize").click(function(){
            $("#boxDiv1").css("width",500);
        });
        //监听大小
        $("#boxDiv1").resize(function(evt){
            var dom=evt.currentTarget;
            var domWidth=$(dom).width();
			var domHeight=$(dom).height();
			console.log("domSize:",[domWidth,domHeight]);
        });
        
    }
}
export default jquery_onresize;