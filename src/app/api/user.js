// fake check auth - wire this up to a real api
  // for now this just fakes an api request with a timeout
export const checkAuth = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(true); // true for logged in or false for not
  }, 5000);
});