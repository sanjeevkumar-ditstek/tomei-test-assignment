import React from "react";
import { Redirect, Route } from "react-router-dom";
import { env } from "../../config/env";
import { connect } from "react-redux";
const PrivateRoute = ({ render: Component, auth, userTypes, ...rest }) => {
  let isRouteAllowed = auth.loggedIn ? true : false;
  return (
    <Route
      {...rest}
      render={(props) => {
        return isRouteAllowed ? <Component {...props} /> : <Redirect to={`${env.PUBLIC_URL}/`} />
      }
      }
    />
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default connect(mapStateToProps, null)(PrivateRoute);