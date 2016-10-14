var apiKey = require('./../.env').apiKey;

function Github() {

}

Github.prototype.getUser = function(username) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response) {
    var user = response.login;
    var name = response.name;
    var location = response.location;
    var bio = response.bio;
    var image = response.avatar_url;
    var followers = response.followers;
    var following = response.following;
    console.log(location);
    console.log(response);
  }).fail(function(error){
    console.log(error.response.JSON.message);
  });
}

exports.githubModule = Github;
