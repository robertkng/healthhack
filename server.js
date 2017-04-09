'use strict'
require('dotenv').config({ silent: true });
const express       = require('express');
const logger        = require('morgan');
const path          = require('path');
const cookieParser  = require('cookie-parser');
const bodyParser    = require('body-parser');
const app           = express();
const PORT          = process.argv[2] || process.env.PORT || 3000;

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));

app.use(cookieParser());

app.use(bodyParser.json());

app.use('/', require('./routes/main'));

app.post('/sendsms', bodyParser.json(), (req, res) => {
  let client = require('twilio')(keys.sid, keys.token);
  client.sendMessage({
    to: req.body.recipient,
    from: '+16462702585',
    body: 'Alert: You have missed your water pill ( or blood pressure pill) today ( or for 2 days etc)'
  }, function (err, responseData) {
    if (!err) {
      res.json({"From": responseData.from, "Body": responseData.body});
    }
  });
});

app.listen(PORT, () => console.log('server is listening on ', PORT));
