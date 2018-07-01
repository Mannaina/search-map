import React, { Component } from 'react';
import { connect } from 'react-redux';
import {showMap} from "./../../Redux/Search";
import './Map.css'
class Map extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         showmap: false
    //     }
    // }
    onShowMapClick=()=>{
        this.props.dispatch(showMap(true))
    }
    render() {
        console.log(this.props.showMap)
        return (
            <div>

                <div>
                    <div className="mapborder">
                        <a onClick={()=>{this.onShowMapClick()}}> {this.props.text}  </a>
                    </div>
                    <div className="mapborder1">
                        {this.props.showMap ? this.props.text:null}

                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    // const text = state.text;
    const { text, showMap} = state;
    return {
        text,
        showMap
    }
}
export default connect(mapStateToProps)(Map);