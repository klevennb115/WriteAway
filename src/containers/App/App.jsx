import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';

import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import Profile from '../Profile/Profile';
import EditorContainer from '../EditorContainer/EditorContainer';
import EditEntry from '../../components/EditEntry/EditEntry';
import PromptManager from '../PromptManager/PromptManager';

import './App.css';

class App extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.dispatch({ type: 'FETCH_USER' });
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/about" component={AboutPage} />
            <ProtectedRoute exact path="/home" component={UserPage} />
            <ProtectedRoute exact path="/profile" component={Profile} />
            <ProtectedRoute exact path="/write" component={EditorContainer} />
            <ProtectedRoute exact path="/edit-writing" component={EditEntry} />
            <ProtectedRoute
              exact
              path="/prompt-manager"
              component={PromptManager}
            />
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
