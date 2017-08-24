function createPost() {
  var title = document.getElementById("postTitle").value;
  var author = document.getElementById("postAuthor").value;
  var body = document.getElementById("postBody").value;

  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate =  _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  document.getElementById("post").innerHTML += postTemplate({"title": title, "body": body, "author": author});
  document.getElementsByTagName("footer")[0].innerHTML += commentsTemplate();
}

function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;

  var commentTemplate = document.getElementById("comment-template");

  var templateFn = _.template(commentTemplate.innerHTML);

  var commentsDiv = document.getElementById("comments");

  var templateHTML = templateFn({'comment': comment, 'commenter': commenter});

  commentsDiv.innerHTML += templateHTML;
}
