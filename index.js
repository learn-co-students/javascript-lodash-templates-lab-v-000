function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;


  var comments = document.getElementById("comments");
  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var templateFn = _.template(commentTemplate);
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter
});
  comments.innerHTML += templateHTML;
}

function createPost() {
  var title = document.getElementById("postTitle").value;
  var author = document.getElementById("author").value;
  var post = document.getElementById("postBody").value;

  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var blog = postTemplate({ 'title': title, 'poster': author, 'body': post });
  var comments = commentsTemplate();
  var posts = document.getElementById("post");

  posts.innerHTML = blog;
  posts.getElementsByTagName("footer")[0].innerHTML = comments
}