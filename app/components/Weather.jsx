var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
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

    this.setState({isLoading: true
    , errorMessage: undefined});

    openWeatherMap.getTemp(locationName).then(
      function (temp) {
        that.setState({
          locationName: locationName
          , temp: temp
          , isLoading: false
        });
      }
      , function (e) {
        that.setState({
          isLoading: false
          , errorMessage:e.message
        });
        alert(errorMessage);

      });

  }
  , render: function() {
    var {temp, locationName, isLoading, errorMessage} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && locationName) {
        return <WeatherMessage locationName={locationName} temp={temp}  />
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }
    // only use one root component
    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
