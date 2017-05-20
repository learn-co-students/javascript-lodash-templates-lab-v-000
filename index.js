function createPost() {
  var title  = document.getElementById("postTitle").value;
  var body   = document.getElementById("postBody").value;
  var author = document.getElementById("postAuthor").value;

  var postTemplateFn = _.template(document.getElementById("post-template").innerHTML);
  var postTemplateHTML = postTemplateFn({ 'postTitle': title, 'postBody': body, 'postAuthor': author });

  var pageTemplateFn = _.template(document.getElementById("page-template").innerHTML);
  var pageTemplateHTML = pageTemplateFn({ 'sidebarContent': 'sidebar', 'postContent': postTemplateHTML });

  var commentsTemplateFn = _.template(document.getElementById("comments-template").innerHTML);
  var commentsTemplateHTML = commentsTemplateFn();

  var mainElem = document.querySelector("main");
  mainElem.innerHTML += pageTemplateHTML;
  mainElem.innerHTML += commentsTemplateHTML;
}

function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment   = document.getElementById("commentText").value;

  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var commentTemplateFn = _.template(commentTemplate);
  var commentTemplateHTML = commentTemplateFn({ 'comment': comment, 'commenter': commenter });

  var commentsDiv = document.getElementById("comments");
  commentsDiv.innerHTML += commentTemplateHTML;
}
