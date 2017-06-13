function createPost() {
  var postAuthor = document.getElementById("postAuthor").value;
  var postBody = document.getElementById("postBody").value;
  var postTitle = document.getElementById("postTitle").value;

  var postTemplateFn = _.template(document.getElementById("post-template").innerHTML);
  var pageTemplateFn = _.template(document.getElementById("page-template").innerHTML);
  var commentsTemplateFn = _.template(document.getElementById("comments-template").innerHTML);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplateFn();

  var postTemplateHTML = postTemplateFn({'postAuthor': postAuthor, 'postBody': postBody, 'postTitle': postTitle});
  var commentsTemplateHTML = commentsTemplateFn();
  var postDiv = document.getElementById("post");

  postDiv.innerHTML = postTemplateHTML;
  postDiv.getElementsByTagName("footer")[0].innerHTML = commentsTemplateHTML

}

function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentBody").value;

  var commentTemplateFn = _.template(document.getElementById("comment-template").innerHTML);
  var commentTemplateHTML = commentTemplateFn({'commenterName': commenterName, 'commentBody': commentBody});
  var commentDiv = document.getElementById("comments");

  commentDiv.innerHTML += commentTemplateHTML;
}
