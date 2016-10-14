var Github = require('./../js/github.js').githubModule;

var displayUser = function(info, repos) {
  $('h2').show();
  $('#user-info').empty();
  $('#user-repos').empty();
  $('#user-info').append("<br><br><div class='col-md-3 col-md-offset-3'><img src='" + info[3] + "'></div>" + "<div class='col-md-3'><h3>" + info[0] + "</h3><p>" + info[1] + "<br>" + info[2] +  "</p></div>");
  for (var i = 0; i < repos.length; i++) {
    if(repos[i][1] === null){
      repos[i][1] = "";
    }
    $('#user-repos').append("<br><div class='col-md-10 col-md-offset-1 well'><h4>" + repos[i][0] + "</h4><h5>" + repos[i][1] + "</h5></div>");
  };
};

$(document).ready(function() {
  var newGithub = new Github();
  $('#form').submit(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    newGithub.getUser(username, displayUser);
  });
});
