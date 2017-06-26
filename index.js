function createPost() {

  var pageTemplate = _.template(document.querySelector("#page-template").innerHTML);
  var postTemplate = _.template(document.querySelector("#post-template").innerHTML);
  var commentsTemplate = _.template(document.querySelector("#comments-template").innerHTML);

  var postTitle = document.querySelector("#postTitle").value;
  var postAuthor = document.querySelector("#postAuthor").value;
  var post = document.querySelector("#postBody").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var blogSection = postTemplate({ 'title': postTitle, 'body': post, 'poster': postAuthor });
  var commentsSection = commentsTemplate();
  var postElement = document.querySelector("#post");

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {

  var commentTemplate = _.template(document.querySelector("#comment-template").innerHTML);

  var commentText = document.querySelector("#commentText").value;
  var commenterName = document.querySelector("#commenter").value;

  var commentsSection = document.querySelector("#comments");
  commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
}
