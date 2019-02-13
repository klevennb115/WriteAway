import React, { Component } from 'react';
import { connect } from 'react-redux';
import SpecificWritings from './SpecificWritings';

class WritingEntries extends Component {
    componentDidMount(){
        this.getEntries();
    }
    getEntries = () => {
        this.props.dispatch({type:'GET_ENTRIES'});
    }
    specificWritings = () => {
        return this.props.entry.map((story, i) => {
            return <SpecificWritings key={i} story={story}/>
        })
        
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Length</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.specificWritings()}
                    </tbody>
                </table>
            </div>

        )
    }
}
const mapStoreToProps = reduxStore => ({
    entry: reduxStore.entry,
})
export default connect(mapStoreToProps)(WritingEntries);