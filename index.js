function createPost() {
  var mainDiv = document.getElementsByTagName("main")[0];
  var postTitle = document.getElementById("postTitle");
  var postBody = document.getElementById("postBody");
  var postAuthor = document.getElementById("postAuthor");

  var pageTemplate = document.getElementById("page-template").innerHTML;
  var postTemplate = document.getElementById("post-template").innerHTML;

  var postTemplateFn = _.template(postTemplate);
  var pageTemplateFn = _.template(pageTemplate);

  var postTempHtml = postTemplateFn({ 'title': postTitle, 'body': postBody, 'author': postAuthor });

  var pageTempHtml = pageTemplateFn({ 'post': postTempHtml });

  mainDiv.innerHTML += pageTempHtml;
}

function postComment() {
  var postDiv = document.getElementsByTagName("div")[0];
  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var commentTemplateFn = _.template(commentTemplate);
}