import React, {Component} from 'react';
import WritingEntries from '../../components/WritingEntries/WritingEntries';
import Overview from '../../components/Overview/Overview';
import './Profile.css';

class Profile extends Component {
    render(){
        return(
            <div>
                <Overview className='overview'/>
                <WritingEntries history={this.props.history}/>
            </div>
            
        )
    }
}

export default Profile;
