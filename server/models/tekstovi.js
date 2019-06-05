const db = require('../database');

class Tekst {
  

  static retrieveAll (callback) {
    db.query('SELECT * from tekstovi', (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  static retrieveTekstByTekst (tekst,callback) {
    db.query(`SELECT * from tekstovi where tekst = $1`,[tekst],(err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  static insert (tekst, callback) {
    db.query('INSERT INTO tekstovi (tekst) VALUES ($1)', [tekst], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }
}

module.exports = Tekst;