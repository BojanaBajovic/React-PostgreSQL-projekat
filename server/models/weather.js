const request = require('request-promise');

//const API_KEY = "5aed7a05194438800b5756991cc3c728";

require('dotenv').config();

class Weather {
  static retrieveByCity (city, callback) {
    request({
      // uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`,
      uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=5aed7a05194438800b5756991cc3c728&units=metric`,
      json: true
    }).then((res) => {
      callback(res);
    }).catch((err) => {
      console.log(err);
      callback({ error: 'Could not reach OpenWeatherMap API.' });
    });
  }
}

module.exports = Weather;