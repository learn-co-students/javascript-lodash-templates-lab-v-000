function createPost() {
  // event.preventDefault();
  var postTitle = document.getElementById("post-title").value;
  var postBody = document.getElementById("post-body").value;
  var postAuthor = document.getElementById("post-author").value;

  var postTemplate = document.getElementById("post-template").innerHTML;
  var templateFn = _.template(postTemplate);

  var postDiv = document.getElementById("post-form");

  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'post-title': postTitle, 'post-body': postBody, 'post-author': postAuthor });

  // debugger;

  //append rather than replace!
  postDiv.innerHTML += templateHTML;
}

function postComment() {
  //   var commenter = document.getElementById("commenterName").value;
  //   var comment = document.getElementById("commentText").value;

  //   var commentTemplate = document.getElementById("comment-template").innerHTML;

  //   //create template function
  //   var templateFn = _.template(commentTemplate);

  //   var commentsDiv = document.getElementById("comments");

  //   //execute template function with JSON object for the interpolated values
  //   var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  //   //append rather than replace!
  //   commentsDiv.innerHTML += templateHTML;
}
