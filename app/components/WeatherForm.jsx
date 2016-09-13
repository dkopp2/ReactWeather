var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var updates = {};
    var locationName = this.refs.locationName.value;

    if (locationName.length > 0) {
      this.refs.locationName.value = '';
      this.props.onSearch(locationName);
    }


  }
  ,  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" ref="locationName" placeholder="Enter city name" />
          </div>
          <div>
            <button className="button expanded hollow">Get Weather</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
