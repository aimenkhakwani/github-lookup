var apiKey = require('./../.env').apiKey;

function Github() {

}

Github.prototype.getUser = function(username, displayFunction) {
  var info = [];
  var repoInfo = [];
  // get request to get user info
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response) {
    var user = response.login;
    var name = response.name;
    var location = response.location;
    var bio = response.bio;
    var image = response.avatar_url;
    var followers = response.followers;
    var following = response.following;
    info.push(user, name, location, bio, image, followers, following);
    // second get request to get user repos 
    $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(result) {
      // console.log(result);
      var repos = result;
      repos.forEach(function(repo) {
        var repoName = repo.name;
        var description = repo.description;
        repoInfo.push([repoName, description]);
      });
      displayFunction(info, repoInfo);
    });
  });

  // $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(result) {
  //   // console.log(result);
  //   var repos = result;
  //   repos.forEach(function(repo) {
  //     var repoName = repo.name;
  //     var description = repo.description;
  //     repoInfo.push([repoName, description]);
  //   });
  //   displayFunction(repoInfo);
  // });
};

exports.githubModule = Github;
