var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', function (req, res, next) {
  res.render('from', { title: 'Send Message' });
});

router.post('/new', function (req, res, next) {
  const data = {
    text: req.body.messageText,
    user: req.body.user,
    added: new Date(),
  };
  messages.push(data);
  res.redirect('/');
});

module.exports = router;
