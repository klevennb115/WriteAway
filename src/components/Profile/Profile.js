import React, {Component} from 'react';
import { connect } from 'react-redux';
import WritingEntries from './WritingEntries/WritingEntries';
import Overview from './Overview';
import Stats from './Stats';


class Profile extends Component {
    render(){
        return(
            <div>
                <Overview />
                <Stats />
                <WritingEntries history={this.props.history} />
            </div>
            
        )
    }
}
const mapStoreToProps = reduxStore => ({
    // reduxStore,
})
export default connect(mapStoreToProps)(Profile);
