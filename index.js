function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;

  var comments = document.getElementById("comments");
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  comments.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });

}

function createPost() {
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var body = document.getElementById("body").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
  var postDiv = document.getElementById("post");
  postDiv.innerHTML = postTemplate({ 'title': title, 'body': body, 'author': author });

  postDiv.getElementsByTagName("footer")[0].innerHTML += commentsTemplate();

}
