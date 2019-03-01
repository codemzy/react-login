// fake check auth - wire this up to a real api
  // for now this just fakes an api request with a timeout
export const checkAuth = new Promise(function(resolve, reject) {
  let dummyUser = { firstName: "Fake", lastName: "User" };
  setTimeout(function() {
    resolve(dummyUser); // return dummyUser for logged in, or false for not logged in
  }, 5000);
});