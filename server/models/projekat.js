const db = require('../database');

class Projekat {
  

  static retrieveAll (callback) {
    db.query('SELECT id_projekat, title, content from projekat', (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  static retrieveProjekatByTitle (title,callback) {
    db.query(`SELECT distinct title from projekat where title = $1`,[title],(err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  static retrieveProjekatByContent (content,callback) {
    db.query(`SELECT distinct content from projekat where content = $1`,[content],(err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

 

  static insert (title, content, callback) {
    db.query('INSERT INTO projekat (title, content) VALUES ($1,$2,$3,$4,$5)', [title, content], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }
}

module.exports = Projekat;