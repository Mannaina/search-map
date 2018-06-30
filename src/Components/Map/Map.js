import React,{Component} from 'react';
import {connect} from 'react-redux';
import './Map.css'
class Map extends Component{
    render(){
        return(
            <div className="mapborder">
                
                </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return {}
}
export default connect (mapStateToProps)(Map);