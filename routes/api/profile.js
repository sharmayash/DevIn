const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// load models
const Profile = require("../../models/profile");
const Auth = require("../../models/Auth");

router.get("/test", (req, res) =>
  res.json({
    msg: "profile connected"
  })
);

// get current user profile (protected route)

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        if (!profile) {
          errors.noProfile = "User profile not exist";
          res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  }
);

// create / update user profile (protected route)

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.company) profileFields.company = req.body.company;
    if (req.body.website) profileFields.website = req.body.website;
    if (req.body.location) profileFields.location = req.body.location;
    if (req.body.bio) profileFields.bio = req.body.bio;
    if (req.body.status) profileFields.status = req.body.status;
    if (req.body.githubUserName)
      profileFields.githubUserName = req.body.githubUserName;
    if (typeof req.body.skills !== "undefined") {
      profileFields.skills = req.body.skills.split(",");
    }
    profileFields.social = {};
    if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
    if (req.body.LinkedIn) profileFields.social.LinkedIn = req.body.LinkedIn;
    if (req.body.Facebook) profileFields.social.Facebook = req.body.Facebook;
    if (req.body.Instagram) profileFields.social.Instagram = req.body.Instagram;
    if (req.body.Twitter) profileFields.social.Twitter = req.body.Twitter;

    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        // update profile
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileUpdateFields },
          { new: true }
        ).then(profile => res.json(profile));
      } else {
        // create profile
        Profile.findOne({ handle: profileFields.handle }).then(profile => {
          if (profile) {
            // if username alredy exist
            errors.handle = "Username already exist";
            res.status(404).json(errors);
          }
          // Save New Profile
          new Profile(profileFields).save().then(profile => res.json(profile));
        });
      }
    });
  }
);

module.exports = router;
