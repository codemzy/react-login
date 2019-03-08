react-login
=================

This is a just a simple react app with a log in. You can [demo it on glitch](https://react-login.glitch.me).


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

This is just a starter react project for front end log in and log out. For example, it can be used to start a membership react application that needs authenticated routes to be hidden, and a way to log in, log out and register users.

It's just the front end, so all the api calls in `src/app/api/user.js` are dummy calls. Enter any email and password to log in or register. Wire it up to a real api for your projects. I usually use [axios](https://www.npmjs.com/package/axios) for api requests, but anything can be used.

I've used [bootstrap v4](https://getbootstrap.com/) but this can be replaced with another framework or custom css.


Dependencies
------------

- [ReactJS](https://reactjs.org/) *obvz*
- [React Router v4](https://reacttraining.com/react-router/) *routing*
- [Validator](https://www.npmjs.com/package/validator) *for some simple validation*
- [Parcel](https://parceljs.org/) *simple builder - no config*
