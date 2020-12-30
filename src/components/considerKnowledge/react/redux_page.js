import React ,{ Component }from 'react';
import { connect } from 'react-redux'
/*****************************redux_page**********************************
 *1.
 */
class redux_page extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"redux_page",
        }
    }
    render(){
        return(
            <div className="wrap redux_page">
                <h2>{this.state.name}</h2>
                <p>{this.props.codeName}</p>
            </div>
        )
    }
    componentDidMount(){
          
    }
}
const mapStateToProps=(state)=>{
    return {
      redux_value:"reduxProps",
      code:state.bookData.code,
      codeName:state.bookData.codeName,
    }
}//e

const mapDispatchToProps=(dispatch)=>{
    return {
        changeCode:(param)=>{dispatch.bookData.changeCode2(param)},
        changeCodeName:(param)=>{dispatch.bookData.changeCodeName(param)}
    }
}//e
export default connect(mapStateToProps,null)(redux_page);
