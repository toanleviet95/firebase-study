import React, { useState, useEffect } from 'react';
import NotificationList from './NotificationList';
import messaging from '@/init-fcm';
import registerPushListener from '@/register-push-listener';

const App = () => {
  const [token, setToken] = useState('');
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    messaging
      .requestPermission()
      .then(async () => {
        const result = await messaging.getToken();
        setToken(result);
      })
      .catch((err) => {
        console.log('Unable to get permission to notify.', err);
      });

    registerPushListener(response => {
      setNotifications([...notifications, response]);
    });
  }, [notifications]);

  return (
    <>
      <h1>React + Firebase Cloud Messaging (Push Notifications)</h1>
      <div>
        Current token is: 
        {' '}
        <p>{token}</p>
      </div>
      <NotificationList notifications={notifications} />
    </>
  );
};

export default App;
