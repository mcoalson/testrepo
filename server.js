'use strict';

const express = require('express');

// Constants
const PORT = 80;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('gonna git dat dns\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
