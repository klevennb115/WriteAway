import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

const Nav = (props) => {
  const user = { props };
  return (
    <div className="navbar navbar-expand-md navcolor">
      <Link to="/home">
        <h2 className="nav-title">Write Away</h2>
      </Link>
      <div className="navbar-nav ml-auto">
        <Link className="nav-link nav-item" to="/home">
          {user.id ? 'Home' : 'Login / Register'}
        </Link>
        {user.id && (
        <>
          <LogOutButton className=" nav-item nav-link" />
        </>
        )}
        <Link className="nav-link nav-item" to="/prompt-manager">
          Prompt Manager
        </Link>
        <Link className="nav-link nav-item" to="/about">
          About
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
