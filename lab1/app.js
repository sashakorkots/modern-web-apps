const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv');
const app = express();

// Load environment variables
dotenv.config();

// Set handlebars as the view engine
app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// Routes
const homeRoutes = require('./routes/index');
const itemRoutes = require('./routes/items');
const staticRoutes = require('./routes/static');

app.use('/', homeRoutes);
app.use('/item', itemRoutes);
app.use('/', staticRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
