var Github = require('./../js/github.js').githubModule;

// Book.prototype.listBooks = function(books) {
//   $('.all_books').empty();
//   for (var i = 0; i < books.length; i++) {
//     $('.all_books').append("<br><div class='row'><div class='col-sm-3'>" + '<img src="' + books[i][4] + '">' + "</div>" + "<div class='col-sm-8 col-sm-offset-1'><h3>" + books[i][0] + "</h3><br>" + "<p class='bold'>Author(s): " + books[i][1] + "</p><p class='bold'>Description: " + books[i][2] + "</p><p class='bold'>Average Rating: "
//     + books[i][3] + "</p></div></div><br>");
//   }
// }

var displayUser = function(info, repos) {
  $('.output').empty();
  $('.col-md-3').append("<img src='" + info[4] + "'></div>");
  $('.col-md-4').append("<p>Username: " + info[0] + "<br>Name: " + info[1] + "<br>Location: " + info[2] + "<br>Bio: " + info[3] + "<br>Followers: " + info[5] + "<br>Folowing: " + info[6] + "</p>");
};

$(document).ready(function() {
  var newGithub = new Github();
  $('#form').submit(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    newGithub.getUser(username, displayUser);
  });
});
