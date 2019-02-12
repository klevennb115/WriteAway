import React, { Component } from 'react';
import { connect } from 'react-redux';

class WritingEntries extends Component {
    componentDidMount(){
        this.getEntries();
    }
    getEntries = () => {
        this.props.dispatch({type:'GET_ENTRIES'});
    }
    render() {
        return (
            <div>
                <h1>Entries</h1>
            </div>

        )
    }
}
const mapStoreToProps = reduxStore => ({
    reduxStore,
})
export default connect(mapStoreToProps)(WritingEntries);