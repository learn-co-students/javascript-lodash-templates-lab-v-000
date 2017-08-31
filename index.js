function createPost() {
  var pageTemplate = document.getElementById("page-template").innerHTML;
  var pageFn = _.template(pageTemplate);
  var pageDiv = document.getElementsByTagName("main")[0];
  pageDiv.innerHTML += pageFn();

  var title = document.getElementById("postTitle").value;
  var post = document.getElementById("postBody").value;
  var author = document.getElementById("postAuthor").value;

  var postTemplate = document.getElementById("post-template").innerHTML;
  var postFn = _.template(postTemplate);
  var postDiv = document.getElementById("post");
  var postHTML = postFn({ 'title': title, 'body': post, 'author': author });
  postDiv.innerHTML = postHTML;

  var commentsTemplate = document.getElementById("comments-template").innerHTML;
  var commentsFn = _.template(commentsTemplate);
  var commentsDiv = document.getElementsByTagName("footer")[0];
  commentsDiv.innerHTML = commentsFn();

  // retrieve values from post form
  // declare the scripts that are templates
  //create template function
  //execute template function with JSON object for the interpolated values
  //append rather than replace!
}

function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var commentText = document.getElementById("commentText").value;
  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var commentFn = _.template(commentTemplate);
  var commentDiv = document.getElementById("comments");
  var commentHTML = commentFn({ 'comment': commentText, 'commenter': commenter });
  commentDiv.innerHTML += commentHTML;
}
