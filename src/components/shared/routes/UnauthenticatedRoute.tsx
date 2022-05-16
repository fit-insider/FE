import React, { useContext } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const UnauthenticatedRoute = ({ component: Component, ...rest }: RouteProps) => {
  const { userId } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={(routeProps) => {
        if (userId) {return <Redirect to='/' />;}

        return <Component {...routeProps} />;
      }}
    />
  );
};

export default UnauthenticatedRoute;