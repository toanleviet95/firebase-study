# Firebase study
[![Build Status][build-badge]][build]

<div align="center">
  <img src="https://webpack.js.org/d19378a95ebe6b15d5ddea281138dcf4.svg" width="10%" />
  +
  <img src="https://d33wubrfki0l68.cloudfront.net/7a197cfe44548cc1a3f581152af70a3051e11671/78df8/img/babel.svg" width="20%" />
</div>

### Tech
- [Babel][babeljs] - Compiling JS
- [Webpack][webpack] - Bundle and dev server
- [Hot loader][react-hot-loader] - React Hot Loader

### Command

- Install
```bash
npm install // or yarn
```

- Start
```bash
npm start // or yarn start
```

- Build
```bash
npm run build // or yarn build
```

### Send notification by request

```
POST: https://fcm.googleapis.com/fcm/send

Header:
Content-Type: application/json
Authorization: key=SERVER_KEY

Body:
{
  "notification": {
      "title": "Firebase",
      "body": "Toan is awesome",
      "click_action": "http://localhost:8080/",
      "icon": ""
  },
  "to": "USER_TOKEN"
}
```

[babeljs]: https://babeljs.io
[webpack]: https://webpack.js.org
[react-hot-loader]: https://github.com/gaearon/react-hot-loader