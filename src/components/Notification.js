import React from 'react';
import propTypes from 'prop-types';

const Notification = ({notification = '', index = ''}) => <li key={index}>{notification}</li>;

Notification.propTypes = {
  notification: propTypes.array.isRequired,
  index: propTypes.string.isRequired,
};

export default Notification;
