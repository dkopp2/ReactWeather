var React = require('react');
var {Link} = require('react-router');

// stateless functional component (no state)
var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This app is for getting the temperature and weather conditions of a given city</p>
      <ol>
        <li>
            <a href="https://github.com/dkopp2/ReactWeather">See us on GitHub</a>
        </li>
      </ol>
    </div>
  );
};

module.exports = About;
