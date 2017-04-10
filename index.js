function createPost() {
  var postTitle = document.getElementById("postTitle").value;
  var postBody = document.getElementById("postBody").value;
  var postAuthor = document.getElementById("postAuthor").value;

  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var post = document.getElementById("post");
  post.getElementsByTagName("footer")[0].innerHTML = commentsTemplate();


  var templateHTML = postTemplate({'postTitle': postTitle, 'postBody': postBody, 'postAuthor': postAuthor});
  post.innerHTML += templateHTML;
}


function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commentText = document.getElementById("commentText").value;
  var commenterName = document.getElementById("commenterName").value;

  var commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
}
