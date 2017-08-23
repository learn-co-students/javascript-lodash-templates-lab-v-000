function createPost() {
  var title = document.getElementById("postTitle").value;
  var author = document.getElementById("postAuthor").value;
  var body = document.getElementById("postBody").value;

  var pageTemplate = _.template(pageTemplate).innerHTML;
  var postTemplate =  _.template(postTemplate).innerHTML;
  var commentsTemplate = _.template(commentsTemplate).innerHTML;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

}

function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;

  var commentTemplate = document.getElementById("commentTemplate");

  var templateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById("comments");

  var templateHTML = templateFn({'comment': comment, 'commenter', commenter});

  commentsDiv.innerHTML += templateHTML;
}
