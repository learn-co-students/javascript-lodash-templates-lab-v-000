function createPost() {
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comment-template").innerHTML);


  var postTitle = document.getElementById("post-title").value;
  var postAuthor = document.getElementById("post-author").value;
  var postBody = document.getElementById("post-body").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var postDiv = document.getElementById("post");

  var postSection = postTemplate({'postBody': postBody, 'postTitle': postTitle, 'postAuthor': postAuthor});
  var commentsSection = commentsTemplate();

  postDiv.innerHTML = postSection;
  postDiv.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {
  var commenterName = document.getElementById("commenter-name").value;
  var commentText = document.getElementById("comment-text").value;
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  var commentsDiv = document.getElementById("comments");

  commentsDiv.innerHTML += commentTemplate({'commenterName': commenterName, 'commentText': commentText});
}
