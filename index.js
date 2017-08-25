function createPost(){
  var page = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var body = document.getElementById("body").value;
  var commentsSection = _.template(document.getElementById("comments-template").innerHTML)
  document.getElementsByTagName("main")[0].innerHTML += page();
 
  var postDiv = document.getElementById("post");

  postDiv.innerHTML =  postTemplate({ 'title': title, 'author': author, 'body': body});
  postDiv.getElementsByTagName("footer")[0].innerHTML = commentsSection
}

function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
 
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
 
  var commentsDiv = document.getElementById("comments");
 
  commentsDiv.innerHTML += commentTemplate({ 'commenter': commenter, 'comment': comment });
}