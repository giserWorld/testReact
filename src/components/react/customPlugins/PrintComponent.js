import React ,{ Component }from 'react';
import ReactToPrint from 'react-to-print';
import './css/myReact.scss';
/**************************打印组件**********************
 *
 **/
class PrintComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"PrintComponent",
        }
    }
    render(){
        return(
            <div>
                <div id="fixed-menu" className="ReactToPrintHeader">
                    <ReactToPrint
                        trigger={() =><a>打印预览</a>}
                        content={() => this.componentRef}
                        onAfterPrint={() => {}}
                    />
                </div>
                <div ref={(el) => { this.componentRef = el}}>
                    {this.props.children}
                </div>
            </div>
        )
    }
    componentDidMount(){

    }
}
export default PrintComponent;