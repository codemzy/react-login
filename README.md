react-login
=================

This is a starter react app with a log in, register and log out components pre-built. You can [demo it here](https://codemzy.github.io/react-login/).

On the demo, enter any email and password to log in or register. Your details won't be saved. It's just the front end, so all the api calls in `src/app/api/user.js` are dummy calls, wire it up to a real api for your projects. I usually use [axios](https://www.npmjs.com/package/axios) for api requests, but anything can be used.

I've used [bootstrap v4](https://getbootstrap.com/) but this can be replaced with another framework or custom css.

---

Get Started
------------

```
npm run start
```
Will build a dev bundle and start the dev server.

```
npm run build
```
Will build a production bundle.

---

Dependencies
------------

- [ReactJS](https://reactjs.org/) *js framework*
- [React Router v4](https://reacttraining.com/react-router/) *routing*
- [Validator](https://www.npmjs.com/package/validator) *for some simple validation*
- [Parcel](https://parceljs.org/) *simple builder - no config*
