const registerPushListener = (callback) =>
  navigator.serviceWorker.addEventListener('message', ({ data }) => {
    const message = data.data
        ? data.data.message
        : data["firebase-messaging-msg-data"].notification.body
    callback(message);
  }
);

export default registerPushListener;