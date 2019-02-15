import React, { Component } from 'react';
import { connect } from 'react-redux';

class Genre extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Uncatagorized' };
    }
    render() {
        return (
            <div>
                <select value={this.state.value}
                    onChange={this.handleChange}>
                    <option></option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select> 
            </div>
        )
    }
}
const mapStoreToProps = reduxStore => ({
    // reduxStore,
})
export default connect(mapStoreToProps)(Genre);


{/* <select value={this.state.value}
    onChange={this.handleChange}>
    <option></option>
    <option value='1'>1</option>
    <option value='2'>2</option>
    <option value='3'>3</option>
    <option value='4'>4</option>
    <option value='5'>5</option>
</select> */}