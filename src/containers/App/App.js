import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import {connect} from 'react-redux';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';

import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import Profile from '../../containers/Profile/Profile';
import TextEditor from '../../components/TextEditor/TextEditor';
import ManualEntry from '../../components/ManualEntry/ManualEntry';
import EditEntry from '../../components/EditEntry/EditEntry';

import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            <ProtectedRoute
              exact
              path="/profile"
              component={Profile}
            />
            <ProtectedRoute
              exact
              path="/write"
              component={TextEditor}
            />
            <ProtectedRoute
              exact
              path="/add-writing"
              component={ManualEntry}
            />
            <ProtectedRoute
              exact
              path="/edit-writing"
              component={EditEntry}
            />
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
