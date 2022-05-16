import React from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext';
import { AppSettingsContextProvider } from './context/AppSettingsContext';
import UnauthenticatedRoute from './shared/routes/UnauthenticatedRoute';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import AuthenticatedRoute from './shared/routes/AuthenticatedRoute';

const App = () => (
  <AppSettingsContextProvider>
    <UserContextProvider>
      <Router>
        <Switch>
          <UnauthenticatedRoute path='/login' component={Login} exact />
          <UnauthenticatedRoute path='/register' component={Register} exact />
          <AuthenticatedRoute path='/' component={Home} exact />
          <Redirect to='/' />
        </Switch>
      </Router>
    </UserContextProvider>
  </AppSettingsContextProvider>
);

export default App;