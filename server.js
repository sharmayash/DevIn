const express = require("express"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  passport = require("passport");

// importing routes

const auth = require("./routes/api/auth"),
  posts = require("./routes/api/posts"),
  profile = require("./routes/api/profile");

const app = express();

// body parser middlewares

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//db config

const db = require("./config/keys").mongoURI;

// connecting to db

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("db connected"))
  .catch(err => console.log(err));

// setting up url of diffrent routes so that we don't need to use exact long url in routes

app.use("/api/auth", auth);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

// passport middleware ( must be declared/initialize before using any passport things )

app.use(passport.initialize());

// require passport config file

require("./config/passport")(passport);

const port = process.env.PORT || 8090;
app.listen(port, () => console.log(`server running on ${port}`));
