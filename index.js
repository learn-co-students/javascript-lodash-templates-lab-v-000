function createPost() {
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  var postTitle = document.getElementById('post-title').value;
  var postBody = document.getElementById('post-body').value;
  var postAuthor = document.getElementById('post-author').value;

 document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var postTemplate = _.template(document.getElementById('post-template').innerHTML);

  document.getElementById("post").innerHTML = postTemplate({'title': postTitle, 'body': postBody, 'author': postAuthor})
}

function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commentBody = document.getElementById('comment-body')
  var commenterName = document.getElementById('commenter-name')
}
