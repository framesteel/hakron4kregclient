import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './components/Login'
import Register from './components/Register'
import View from './components/View'
import Error from './components/Error'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar/>
          <Switch>
            <Route path='/' component={Login} exact/>
            <Route path='/register' component={Register}/>
            <Route path='/view' component={View}/>
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
