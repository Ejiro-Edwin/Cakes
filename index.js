const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Route file
const cakes = require('./routes/api/cake');


const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req,res) => res.send('Hello World Boss!'));

app.use('/api/cake', cakes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
