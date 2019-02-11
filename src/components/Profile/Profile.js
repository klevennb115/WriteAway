// import React, {Component} from 'react';
// import { connect } from 'react-redux';

// class Profile extends Component {
//     renders(){
//         return(
//             <div>
//                 <h1>Hi</h1>
//             </div>
            
//         )
//     }
// }
// const mapStoreToProps = reduxStore => ({
//     reduxStore,
// })
// export default connect(mapStoreToProps)(Profile);


// import React, { Component } from 'react';
import React from 'react';
import { connect } from 'react-redux';

const Profile = () => (
    <div>
        <p>
            Profile
        </p>
        <button>Sup</button>
    </div>
);
const mapStoreToProps = reduxStore => ({
    reduxStore,
})
export default connect(mapStoreToProps)(Profile);