const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (!validator.isLength(data.text, { min: 5, max: 400 })) {
    errors.text = "post must be in range in 5 to 300 words";
  }

  if (validator.isEmpty(data.text)) {
    errors.text = "text field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
