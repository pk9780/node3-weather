const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=82c50abe92fecda26f4efdd34113e6e3&query=" +
    latitude +
    "," +
    longitude +
    "&units=m";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions +
          ". It is currently " +
          body.current.temperature +
          " and feels like " +
          body.current.feelslike +
          ". Humidity is " +
          body.current.humidity +
          " wind speed is " +
          body.current.wind_speed +
          "."
      );
    }
  });
};

module.exports = forecast;
