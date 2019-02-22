import React, {Component} from 'react';
import { connect } from 'react-redux';
import WritingEntries2 from './WritingEntries/WritingEntries2';
import Overview from './Overview';

class Profile extends Component {
    render(){
        return(
            <div>
                <Overview />
                {/* <Stats /> */}
                <WritingEntries2 history={this.props.history} />
            </div>
            
        )
    }
}
const mapStoreToProps = reduxStore => ({
    // reduxStore,
})
export default connect(mapStoreToProps)(Profile);
