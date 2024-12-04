exports.getPrivacyPage = (req, res) => {
  res.render('privacy', { title: 'Privacy Policy' });
};

exports.getAboutPage = (req, res) => {
  res.render('about', { title: 'About the Developer' });
};
