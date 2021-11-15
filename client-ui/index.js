const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
global.nconf = require('nconf');
const routes = require('./app/server/routes');

// Load Environment variables from .env file
require('dotenv').config()
// Set up configs
nconf.use('memory');
// First load command line arguments
nconf.argv();
// Load environment variables
nconf.env();
// Load config file for the environment
require('./app/config/environments/' + nconf.get('NODE_ENV'));


const app = express();
app.use(bodyParser.urlencoded({extended: false}));

// Set public directory
app.use(express.static(path.join(__dirname, 'app/public')));

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app/public/views'));

// Initializing routes
routes(app);

// Start server
app.listen(nconf.get('NODE_PORT'), () => console.log(`[APP] The server is running at localhost:${nconf.get('NODE_PORT')}`));
