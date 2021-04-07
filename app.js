const express = require('express');
// const session = require('express-session');
 const exphbs = require('express-handlebars');
const routes = require('./controller');
const path = require('path');
// const helpers = require('./utils/helpers');


// const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helper
 const hbs = exphbs.create();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen(PORT, () => console.log('Now listening'));