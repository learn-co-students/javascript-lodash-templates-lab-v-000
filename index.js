function createPost(){
  var title = document.getElementById("postTitle").value;
  var author = document.getElementById("postAuthor").value;
  var body = document.getElementById("postBody").value

  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var commentsDiv = commentsTemplate();
  var postDiv = document.getElementById("post");

  var postTemplateHTML = postTemplate({ 'title': title, 'author': author, 'body': body});

  postDiv.innerHTML = postTemplateHTML;
  postDiv.getElementsByTagName("footer")[0].innerHTML = commentsDiv;
}

function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;

  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commentsDiv = document.getElementById("comments");

  commentsDiv.innerHTML += commentTemplate({ 'comment': comment, 'commenter': commenter });
}
