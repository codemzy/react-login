// // fake check auth - wire this up to a real api
// export const checkAuth = function() {
//   // return true if auth'd
//   return false;
// }

export const checkAuth = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(true);
  }, 5000);
});