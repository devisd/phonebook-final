import React from 'react';

const PrivateRoute = ({
  children,
  restricted = false,
  redirectedTo = '/login',
  ...routesProp
}) => {
  return <PrivateRoute>{children}</PrivateRoute>;
};

const PublicRoute = ({
  children,
  restricted = false,
  redirectedTo = '/login',
  ...routesProp
}) => {
  return <PublicRoute to={redirectedTo}>{children}</PublicRoute>;
};

export { PrivateRoute, PublicRoute };
