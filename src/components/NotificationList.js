import React from 'react';
import propTypes from 'prop-types';
import Notification from './Notification';

const NotificationList = ({notifications = []}) => (
  <ul>
    Notifications List:
    {notifications.map((item, i) => (
      <Notification notification={item} index={`notification_${i}`} />
      )
    )}
  </ul>
);

NotificationList.propTypes = {
  notifications: propTypes.array.isRequired,
};

export default NotificationList;
