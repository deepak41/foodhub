const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./app/server/routes');
const PORT = process.env.PORT || 5000;


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
app.listen(PORT, () => console.log(`[APP] The server is running at localhost:${PORT}`));
