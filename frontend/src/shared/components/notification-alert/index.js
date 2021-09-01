import React from 'react';
import * as Notifications from 'react-notification-system-redux';
import { connect } from "react-redux";

const NotificationAlert = ({notifications}) => {
    return (
        <Notifications notifications={notifications}></Notifications>
    );
}

const mapStateToProps = state => {
    return {
      notifications: state.notifications
    };
  };
  export default connect(mapStateToProps, null)(NotificationAlert);
