const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// load input validations

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// load database model schema

const Auth = require("../../models/Auth");

// register / sign up : new user

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Grab the email from frontend using body-parser

  Auth.findOne({ email: req.body.email }).then(user => {
    if (user) {
      // if user with that email exist in database
      errors.email = "Email Already Exist";
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", //size
        r: "pg", //rating
        d: "mm"
      });

      // make new user

      const newUser = new Auth({
        name: req.body.name,
        email: req.body.email,
        avatar, // avatar: avatar
        password: req.body.password
      });

      // grab password from above and generate salt or hash code

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// login user / return jwt

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  // bring email and password from login form

  const email = req.body.email;
  const password = req.body.password;

  // find user by email

  Auth.findOne({ email }).then(user => {
    // check for user email

    if (!user) {
      errors.email = "User Not Found";
      return res.status(404).json(errors);
    }

    // check for password
    // bcrypt compares the password in db with entered password in login form

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //res.json({ msg: 'success' });
        // if they match then grab the id, name and avatar from db and assign to local payload object keys

        const payload = { id: user.id, name: user.name, avatar: user.avatar };

        // jwt checks for payload and access keys and creates sessions of assigned particular time .

        jwt.sign(payload, keys.secretKey, { expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token
          });
        });
      } else {
        errors.password = "Incorrect Password";
        return res.status(404).json(errors);
      }
    });
  });
});

// shows current user info.
// protected route

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;
