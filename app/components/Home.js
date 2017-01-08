var React = require('react');
var ReactRouter = require('react-router');
var transparentBg = require('../styles').transparentBg;
var Link = ReactRouter.Link;
var MainContainer = require('./MainContainer');


var Home = React.createClass({
  render: function() {
    return (
      <MainContainer>
        <h1>GitHub battle</h1>
        <p>Some fancy motto</p>
        <Link to="/playerOne">
          <button type="button" className="btn btn-lg btn-success">Get started</button>
        </Link>
      </MainContainer>
    ) 
  }
});

module.exports = Home;