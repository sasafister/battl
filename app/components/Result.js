var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var UserDetails = require('./UserDetails');
var Link = require('react-router').Link;
var MainContainer = require('./MainContainer');
var Loading = require('./Loading')

function StartOver() {
  return (
    <div className="col-sm-12" style={styles.space}>
      <Link to="/playerOne">
        <button type="button" className="btn btn-lg btn-danger">Start Over</button>
      </Link>
    </div>
  )
}

function Result (props) {

  if(props.isLoading === true) {
    return(
      <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <Loading />
      </div>
    )
  }
  
  if(props.scores[0] === props.scores[1]) {
    return(
      <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1> It's a tie! </h1>
        <StartOver />
      </div>
    )
  }
  var winner = props.scores[0] > props.scores[1] ? 0 : 1;
  var looser = winner === 0 ? 1 : 0;
  return (
    <MainContainer>
      <h1>Results: </h1>
      <div className="col-sm-8 col-sm-offset-2"> 
        <UserDetailsWrapper headers="Winner"> 
          <UserDetails score={props.scores[winner]} info={props.playersInfo[winner]} /> 
        </UserDetailsWrapper> 
        <UserDetailsWrapper headers="Looser"> 
          <UserDetails score={props.scores[looser]} info={props.playersInfo[looser]} /> 
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  )
}

Result.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Result;