const express = require('express'),    
      mongoose = require('mongoose'),
      auth = require('./routes/api/auth'),
      posts = require('./routes/api/posts'),
      profile = require('./routes/api/profile')

const app = express();

//db config
const db = require('./config/keys').mongoURI;

// connecting to db
mongoose
    .connect(db)
    .then(() => console.log('db connected'))
    .catch(err => console.log(err));

app.use('/api/auth', auth);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

app.get('/',(req, res) => res.send('server started'));


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`server running on ${port}`));