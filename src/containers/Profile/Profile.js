import React, {Component} from 'react';
import WritingEntries from '../../components/WritingEntries/WritingEntries';
import ProfileOverview from '../../components/ProfileOverview/ProfileOverview';
import './Profile.css';

class Profile extends Component {
    render(){
        return(
            <div>
                <ProfileOverview className='overview'/>
                <WritingEntries history={this.props.history}/>
            </div>
            
        )
    }
}

export default Profile;
