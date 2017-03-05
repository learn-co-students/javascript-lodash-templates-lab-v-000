function createPost() {
  var author = document.getElementById("postAuthor").value;
  var body = document.getElementById("postBody").value;
  var title = document.getElementById("postTitle").value;

  var pageTemplate = document.getElementById("page-template").innerHTML;
  var templateFn = _.template(pageTemplate);

  var main = document.querySelector("main")

  main.innerHTML = templateFn();

  var postTemplate = document.getElementById("post-template").innerHTML;

  var postContainer = document.getElementById("post");

  templateFn = _.template(postTemplate);

  templateHTML = templateFn({ 'title': title, 'author': author, 'body': body });

  postContainer.innerHTML += templateHTML;

  var commentsTemplate = document.getElementById("comments-template").innerHTML;

  templateFn = _.template(commentsTemplate);

  var sidebarDiv = document.getElementById("sidebar");

  sidebarDiv.innerHTML += templateFn();
}

function postComment() {
  var author = document.getElementById("commentAuthor").value;
  var comment = document.getElementById("comment").value;

  var commentTemplate = document.getElementById("comment-template").innerHTML;

  var templateFn = _.template(commentTemplate);

  var templateHTML = templateFn({ 'author': author, 'comment': comment });

  var commentDiv = document.getElementById('comments');

  commentDiv.innerHTML += templateHTML;
}
