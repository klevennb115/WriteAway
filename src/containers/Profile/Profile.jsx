import React from 'react';
import WritingEntries from '../../components/WritingEntries/WritingEntries';
import ProfileOverview from '../../components/ProfileOverview/ProfileOverview';

// class Profile extends Component {
//   render() {
//     return (
//       <div>
//         <ProfileOverview />
//         <WritingEntries history={this.props.history} />
//       </div>

//     );
//   }
// }

const Profile = (props) => {
  const history = { props };
  return (
    <div>
      <ProfileOverview />
      <WritingEntries history={history} />
    </div>
  );
};

export default Profile;
