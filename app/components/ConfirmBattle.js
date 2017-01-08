var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');

function ConfirmBattle(props) {
  return props.isLoading === true 
    ? <Loading text='Waiting' speed={400}/>
    : <MainContainer>
      <h1>Confirm players</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper headers="Player 1">
          <UserDetails info={props.playersInfo[0]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper headers="Player 2">
          <UserDetails info={props.playersInfo[1]} />
        </UserDetailsWrapper>
      </div> 
      <div className="col-sm-8 col-sm-offset-2">
        <div className="col-sm-12" style={styles.space}>
          <button type='button' className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
            Initiate battle!
          </button>
        </div>
        <div className="col-sm-12" style={styles.space}>
          <Link to="/playerOne">
            <button type="button" className="btn btn-lg btn-danger" styles="styles.space">
               Reselect players
            </button>
          </Link>
        </div>
      </div>
      </MainContainer>
    
}
    
ConfirmBattle.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired
}

module.exports = ConfirmBattle;