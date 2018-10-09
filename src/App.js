import React, { Component } from 'react';
import './App.css';

import PersonalNuevo from './components/PersonalNuevo';
import PersonalDashboard from './components/PersonalDashboard';
import Login from './components/Login';

class App extends Component {
  state = {
    login: false
  };

  render() {
    if (!this.state.login) {
      return <Login onLogin={e => this.setState({
        login: true
      })} />
    }

    return (
      <PersonalDashboard />
    );
  }
}

export default App;
