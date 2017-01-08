var axios = require('axios');

var id = "d020145ce0765c1de410";
var secret = "00f6f300d1182fe3013bad4becaec5a147665615";
var param = "?cliend_id=" + id + "&client_secret" + secret;

function getUserInfo(username) {
  return axios.get("http://api.github.com/users/" + username + param)
}

function getUserInfo (username) {
  return axios.get('https://api.github.com/users/' + username + param);
}

function getRepos (username) {
  return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100');
}

function getTotalStars (repos) {
  return repos.data.reduce(function (prev, current) {
    return prev + current.stargazers_count
  }, 0)
}

function getPlayersData (player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then(function (totalStars) {
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    })
}

function calculateScores (players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}

var helpers = {
  getPlayersInfo: function(players) {
   return axios.all(players.map(function(username){
      return getUserInfo(username)  
   })).then(function(info) {
     return info.map(function(user) {
       return user.data;
     })
   }).catch(function(err){
     console.warn("error in getPlayersInfo")
   })
  },
  battle: function(players) {
    var playerOneData = getPlayersData(players[0]);
    var playerTwoData = getPlayersData(players[1]);
    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function(err) { console.log('Error in getPlayersInfo: ', err)})
  }
}

module.exports = helpers;