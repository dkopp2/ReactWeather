var React = require('react');

var WeatherMessage = ({temp, locationName}) => {
  return (
      <h3 className="text-center">It's {temp} in {locationName}!</h3>
  )};

module.exports = WeatherMessage;
