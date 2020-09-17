import React ,{ Component }from 'react';
import { connect } from 'react-redux'

//redux包裹的react组件
class HistoryBook extends Component{
    name="historyBook_redux";
    render(){
        return(
            <div>
                <h2>{this.name}</h2><hr/>
            </div>
        )
    }
    printRes=()=>{

    }
}

const mapStateToProps=(state)=>{
    return {
        redux_value:"reduxProps"
    }
}//e

const mapDispatchToProps=(state)=>{
    return {
        
    }
}//e
export default connect(mapStateToProps,mapDispatchToProps,null,{forwardRef:true})(HistoryBook);