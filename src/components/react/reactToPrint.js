import React ,{ Component }from 'react';
import ReactToPrint from 'react-to-print';
/**************************index**********************
 *
 **/

//打印内容组件
class ComponentToPrint extends Component {
    render() {
      return (
        <table>
          <tbody>
            <tr>
              <td>column 1</td>
              <td>column 2</td>
              <td>column 3</td>
            </tr>
            <tr>
              <td>data 1</td>
              <td>data 2</td>
              <td>data 3</td>
            </tr>
            <tr>
              <td>data 1</td>
              <td>data 2</td>
              <td>data 3</td>
            </tr>
            <tr>
              <td>data 1</td>
              <td>data 2</td>
              <td>data 3</td>
            </tr>
          </tbody>
        </table>
      );
    }
}//e1

class reactToPrint extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"reactToPrint",
        }
    }
    render(){
        return(
            <div>
                <ReactToPrint
                    trigger={() => <a onClick={(e)=>{e.preventDefault()}}>打印数据</a>}
                    content={() => this.componentRef}
                />
                <ComponentToPrint ref={el => (this.componentRef = el)} />
            </div>
        )
    }
    componentDidMount(){

    }
}
export default reactToPrint;