import React,{Component} from 'react';
import "./Search.css"
import {searchMap,showMap} from './../../Redux/Search';
import {connect } from 'react-redux'
class Search extends Component{
constructor(){
    super();
    this.state={
        text:null
    }
}
onHandleChange=(e)=>{
    this.setState({
        text:e.target.value
    })
}
handleSearch=()=>{
    this.props.dispatch(searchMap(this.state.text))
    this.props.dispatch(showMap(false))
}
    render(){
    //    console.log(this.state.text)
        return(
            <div>
                <div>
                <input type='text' placeholder="Search..." onChange={(e)=>{this.onHandleChange(e)}}/>
                <span className="glyphicon glyphicon-search searchicon" onClick={()=>{this.handleSearch()}}>
                </span>
                 </div>
                </div>
        );
    }
}
const mapStateToProps=(state)=>{
return {

}
}
export default connect (mapStateToProps)(Search)
