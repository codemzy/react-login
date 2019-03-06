// fake user requests - wire this up to a real api
  // for now this just fakes api requests with a timeout

// fake user info
let dummyUser = { firstName: "Fake", lastName: "User", email: "fake.user@email.com" };

// fake check if use is authenticated (logged in)
export const checkAuth = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(false); // return dummyUser for logged in, or false for not logged in
  }, 5000);
});

// fake register a user
export const userRegister = function(email, password) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve({...dummyUser, email: email }); // return a user for successful register
    }, 2000);
  });
};