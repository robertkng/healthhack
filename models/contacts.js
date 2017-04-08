const pgp = require('pg-promise');
const db = require('../lib/dbconnect');

function getAllContacts(req, res, next) {
  db.any(`SELECT * FROM contacts`)
    .then((results) => {
      res.status(200)
        .json({
          data: results,
    });
  })
    .catch(err => next(err));
}

module.exports = {
  getAllContacts: getAllContacts,
};
