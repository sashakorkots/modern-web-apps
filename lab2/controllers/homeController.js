const items = require('../models/items');

exports.getHomePage = (req, res) => {
  res.render('home', { title: 'Tech Blog', items });
};
