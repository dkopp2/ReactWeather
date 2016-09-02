var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getDefaultProps: function() {
    return {
      locationName: 'Somewhere out there, beneath the pale moonlight'
      , temp: 88
    };
  }
  , getInitialState: function() {
      var {locationName, temp} = this.props;
      console.log(locationName);
      return {
        locationName: locationName
        , temp: this.props.temp
        , isLoading: false
      };
  }
  , handleSearch: function (locationName) {
    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(locationName).then(
      function (temp) {
        that.setState({
          locationName: locationName
          , temp: temp
          , isLoading: false
        });
      }
      , function (errorMessage) {
        that.setState({
          isLoading: false
        });
        alert(errorMessage);

      });

  }
  , render: function() {
    var {temp, locationName, isLoading} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && locationName) {
        return <WeatherMessage locationName={locationName} temp={temp}  />
      }
    }
    // only use one root component
    return (
      <div>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
