var apiKey = require('./../.env').apiKey;

function Github() {

}

Github.prototype.getUser = function(username) {
  var info = [];
  var repoInfo = [];
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response) {
    var user = response.login;
    var name = response.name;
    var location = response.location;
    var bio = response.bio;
    var image = response.avatar_url;
    var followers = response.followers;
    var following = response.following;
    info.push(user, name, location, bio, image, followers, following)
    // console.log(info);
  }).fail(function(error){
    console.log(error.response.JSON.message);
  });

  $.get('https://api.github.com/users/' + username + '/repos').then(function(result) {
    var repos = result;
    console.log(repos);
    repos.forEach(function(repo) {
      var repoName = repo.name;
      var description = repo.description;
      // console.log(description);
    });
  }).fail(function(fail){
    console.log(fail.response.JSON.message);
  });
};

// Github.prototype.getUserRepos = function(username) {
//   $.get('https://api.github.com/users/' + username + '/repos').then(function(response1) {
//     console.log(response1);
//   }).fail(function(error){
//     console.log(error.response.JSON.message);
//   });
// }

exports.githubModule = Github;
