const items = require('../models/items');

exports.getItemDetails = (req, res) => {
  const item = items.find((i) => i.id === req.params.id);
  if (item) {
    res.render('item', { title: item.title, item });
  } else {
    res.status(404).send('Item not found');
  }
};
