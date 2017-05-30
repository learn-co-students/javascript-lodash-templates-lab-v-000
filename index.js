function createPost() {
  var postAuthor = document.getElementById("postAuthor").value;
  var postText = document.getElementById("postText").value;
  var postTitle = document.getElementById("postTitle").value;

  var postTemplateFn = _.template(document.getElementById("post-template").innerHTML);
  var pageTemplateFn = _.template(document.getElementById("page-template").innerHTML);
  var commentsTemplateFn = _.template(document.getElementById("comments-template").innerHTML);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplateFn();

  var postTemplateHTML = postTemplateFn({'postAuthor': postAuthor, 'postText': postText, 'postTitle': postTitle});
  var commentsTemplateHTML = commentsTemplateFn();
  var postDiv = document.getElementById("post");

  postDiv.innerHTML = postTemplateHTML;
  postDiv.getElementsByTagName("footer")[0].innerHTML = commentsTemplateHTML

}

function postComment() {
  var commenterName = document.getElementById("commenterName").value;
  var commentText = document.getElementById("commentText").value;

  var commentTemplateFn = _.template(document.getElementById("comment-template").innerHTML);

  var commentTemplateHTML = commentTemplateFn({'commenterName': commenterName, 'commentText': commentText});

  var commentDiv = document.getElementById("comments");

  commentDiv.innerHTML += commentTemplateHTML;
}
