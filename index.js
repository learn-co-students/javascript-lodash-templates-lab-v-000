function createPost() {
  var title = document.getElementById("title").value;
  var body = document.getElementById("body").value;
  var author = document.getElementById("author").value;
 
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
 
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var postDiv = document.getElementById("post");
  postDiv.innerHTML = postTemplate({ 'title': title, 'body': body, 'author': author });
 
  postDiv.getElementsByTagName("footer")[0].innerHTML += commentsTemplate();
}

function postComment() {
  var commenterName = document.getElementById("commenter").value;
  var commentText = document.getElementById("commentText").value;

  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var comments = document.getElementById("comments");

  comments.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
}