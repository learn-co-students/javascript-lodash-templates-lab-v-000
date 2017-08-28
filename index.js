function createPost() {
  var pageTemplate = document.getElementById("page-template").innerHTML;

  var pageTemplateFn = _.template(pageTemplate);

  var postTemplate = document.getElementById("post-template").innerHTML;

  var postTemplateFn = _.template(postTemplate);

  var commentsTemplate = document.getElementById("comments-template").innerHTML;

  var commentsTemplateFn = _.template(commentsTemplate);


  var postTitle = document.getElementById("postTitle").value;
  var postContent = document.getElementById("postBody").value;
  var postAuthor = document.getElementById("postAuthor").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplateFn();

  var postSection = postTemplateFn({'postTitle': postTitle, 'postContent': postContent, 'postAuthor': postAuthor});
  var commentsSection = commentsTemplateFn();
  var postElement = document.getElementById("post");

  postElement.innerHTML = postSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;


}

function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commentText = document.getElementById("commentText").value;
  var commenterName = document.getElementById("commenterName").value;

  var commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });

}
