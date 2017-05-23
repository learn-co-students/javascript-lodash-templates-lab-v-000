function createPost() {
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  //Get blog values from submitted form
  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var postBody = document.getElementById("postBody").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  // var postSection = _.template(document.getElementById("post").innerHTML);

  var blogSection = postTemplate({ 'postTitle': postTitle, 'postAuthor': postAuthor, 'postBody': postBody})
  var commentsSection = commentsTemplate();
  var postElement = document.getElementById("post");

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;

  // postSection.innerHTML += postTemplate({ 'postTitle': postTitle, 'postAuthor': postAuthor, 'postBody': postBody})
}

function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("comment").value;

  var commentsDiv = document.getElementById("comments");

  commentsDiv.innerHTML += commentTemplate({ 'commenterName': commenterName, 'comment': comment });
}
