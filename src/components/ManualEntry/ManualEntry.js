import React, {Component} from 'react';
// import React, { Component } from 'react';
import { connect } from 'react-redux';
var moment = require('moment'); 

class ManualEntry extends Component{
    copyPaste = () => {
        // let m = moment();
        // let roundDown = m.startOf('day');
        // console.log("m,roundDown", m);
        // console.log('round', roundDown);
        
        
    }
    render(){
        return (
            <div>
                <p>ManualEntry</p>
                <button onClick={this.copyPaste} >Slup</button>
            </div>
        )
    }
   
};
const mapStoreToProps = reduxStore => ({
    // reduxStore,
})
export default connect(mapStoreToProps)(ManualEntry);