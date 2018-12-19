const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";

  if (!validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle =
      "Username Must be greater than 2 and smaller than 40 alphabets .";
  }

  if (validator.isEmpty(data.handle)) {
    errors.handle = "Username required";
  }

  if (validator.isEmpty(data.status)) {
    errors.status = "Status Field is Required";
  }

  if (validator.isEmpty(data.skills)) {
    errors.skills = "Skills Field is Required";
  }

  if (!isEmpty(data.website)) {
    if (!validator.isURL(data.website)) {
      errors.website = "Not a valid Url";
    }
  }
  if (!isEmpty(data.youtube)) {
    if (!validator.isURL(data.youtube)) {
      errors.youtube = "Not a valid Url";
    }
  }
  if (!isEmpty(data.LinkedIn)) {
    if (!validator.isURL(data.LinkedIn)) {
      errors.LinkedIn = "Not a valid Url";
    }
  }
  if (!isEmpty(data.Instagram)) {
    if (!validator.isURL(data.Instagram)) {
      errors.Instagram = "Not a valid Url";
    }
  }
  if (!isEmpty(data.Facebook)) {
    if (!validator.isURL(data.Facebook)) {
      errors.Facebook = "Not a valid Url";
    }
  }
  if (!isEmpty(data.Twitter)) {
    if (!validator.isURL(data.Twitter)) {
      errors.Twitter = "Not a valid Url";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
