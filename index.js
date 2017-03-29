function createPost(){
  var postTitle = document.getElementById("postTitle").value;
  var postBody = document.getElementById("postBody").value;
  var postAuthor = document.getElementById("postAuthor").value;

  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate()

  var post = document.getElementById("post");
  post.innerHTML += postTemplate({'title': postTitle, 'body': postBody, 'author': postAuthor});
  post.innerHTML += commentsTemplate();
}

function postComment(){
  var commenter = document.getElementById("commenters").value;
  var commenterText = document.getElementById("commenterText").value;

  var templateFn = _.template(document.getElementById("comment-template").innerHTML);

  var commentsDiv = document.getElementById("comments");
  commentsDiv.innerHTML += templateFn({ 'commenter': commenter, 'commenterText': commenterText });
}
