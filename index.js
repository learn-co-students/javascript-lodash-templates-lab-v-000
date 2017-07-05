function postComment() {
  var commenter = document.getElementById("commenter").value;
  var comment = document.getElementById("commentText").value;
 
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
 
 
  var commentsDiv = document.getElementById("comments");
 
  var commentsSection = commentTemplate({ 'comment': comment, 'commenter': commenter });
 
  commentsDiv.innerHTML += commentsSection;
}

function createPost() {
  var title = document.getElementById("postTitle").value;
  var body = document.getElementById("postText").value;
  var author = document.getElementById("authorName").value;
 
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
 
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
 
  var postSection = postTemplate({ 'title': title, 'body': body, 'poster': author });
  var commentsSection = commentsTemplate();
  var postElement = document.getElementById("post");
 
  postElement.innerHTML = postSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}