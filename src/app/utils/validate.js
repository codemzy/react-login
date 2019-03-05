// get validator functions
import validator from 'validator';

// some basic front end validation 
  // (proper validation needs to take place on backend)

// check email
export const checkEmail = function(email) {
  if (!email || !validator.isEmail(email)) {
      return "You need to enter a valid email address";
  } else {
      return false;
  }
};

// check password
export const checkPassword = function(password) {
  if (!password || password.length < 8) {
      return "Enter a password of at least 8 characters";
  } else {
      return false;
  }
};

// check name
export const checkName = function(name) {
  if (!name || name.length < 3 ) {
      return "Name is too short";
  } else if (!validator.matches(name, /^[a-z ]+$/gi)) { // allow letters and spaces
      return "Please enter your full name, using only letters and spaces";
  } else if (validator.matches(name, /^[ ]+$/gi)) { // dont allow just spaces
      return "Name needs to include letters";
  } else {
      return false;
  }
};

// check match
export const checkMatch = function(text, match, error) {
  if (!text || !match || text !== match) {
      return error;
  } else {
      return false;
  }
};

// check not a match
export const checkNoMatch = function(text, noMatch, error) {
  if (text === noMatch) {
      return error;
  } else {
      return false;
  }
};