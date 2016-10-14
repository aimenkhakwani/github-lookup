var Github = require('./../js/github.js').githubModule;

// var displayUsers = function(){
//
// }

$(document).ready(function() {
  var newGithub = new Github();
  $('#form').submit(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    var all_info = newGithub.getUser(username);
    console.log(all_info);
  });
});
