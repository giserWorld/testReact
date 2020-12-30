import React ,{ Component }from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
/************************react_withRouter_redux************************
 *1.withRouter()和redux高阶组件
 **/
class react_withRouter_redux extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"react_withRouter_redux",
        }
    }
    render(){
        return(
            <div className={this.state.name}>
                <h2>{this.state.name}</h2><hr/>
            </div>
        )
    }
    componentDidMount(){
        console.log("props:",this.props);
    }
}
const mapStateToProps=(state)=>{
    return {
      redux_value:"reduxProps",
      code:state.bookData.code,
      codeName:state.bookData.codeName,
    }
}//e
export default connect(mapStateToProps,null)(withRouter(react_withRouter_redux));