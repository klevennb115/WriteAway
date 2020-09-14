import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

const Nav = (props) => (
	<div className="nav">
		<Link to="/home">
			<h2 className="nav-title">Write Away</h2>
		</Link>
		<div className="nav-right">
			<Link className="nav-link" to="/home">
				{props.user.id ? "Home" : "Login / Register"}
			</Link>
			{props.user.id && (
				<>
					<LogOutButton className="nav-link" />
				</>
			)}
			<Link className="nav-link" to="/prompt-manager">
				Prompt Manager
			</Link>
			<Link className="nav-link" to="/about">
				About
			</Link>
		</div>
	</div>
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
