import React from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext';
import { AppSettingsContextProvider } from './context/AppSettingsContext';
import UnauthenticatedRoute from './shared/routes/UnauthenticatedRoute';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import AuthenticatedRoute from './shared/routes/AuthenticatedRoute';
import MealplanPage from './pages/mealplan/Mealplan';
import { MealplanContextProvider } from './context/MealplanContext';
import HomePage from './pages/home/Home';
import Account from './pages/account/Account';

const App = () => (
  <AppSettingsContextProvider>
    <UserContextProvider>
      <MealplanContextProvider>
        <Router>
          <Switch>
            <UnauthenticatedRoute path='/login' component={Login} exact />
            <UnauthenticatedRoute path='/register' component={Register} exact />
            <AuthenticatedRoute path='/account' component={Account} exact />
            <Route path='/mealplan' component={MealplanPage} exact />
            <Route path='/' component={HomePage} exact />
            <Redirect to='/' />
          </Switch>
        </Router>
      </MealplanContextProvider>
    </UserContextProvider>
  </AppSettingsContextProvider>
);

export default App;