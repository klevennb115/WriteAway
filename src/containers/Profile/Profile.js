import React, {Component} from 'react';
import WritingEntries from '../../components/WritingEntries/WritingEntries';
import ProfileOverview from '../../components/ProfileOverview/ProfileOverview';

class Profile extends Component {
    render(){
        return(
            <div>
                <ProfileOverview />
                <WritingEntries history={this.props.history}/>
            </div>
            
        )
    }
}

export default Profile;
