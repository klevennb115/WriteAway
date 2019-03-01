import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import Dashboard from './Dashboard';
import Streak from './Streak';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`


const UserPage = (props) => (
  <div>
    <Streak />
    {/* <h1 id="welcome">
      Welcome, {props.user.username}! {props.user.current_streak ? `You have written ${props.user.current_streak} days in a row!`:'Time to start a new writing streak!'}
    </h1> */}
    <Dashboard />
    <br /><br /><br /><br /><br />
    <LogOutButton className="log-in additional-log-out" />
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
