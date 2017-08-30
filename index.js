function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
  //insert comment into "comments" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>
  // var commentTemplate = '<div class="comment"><p><%= comment %></p><p>Posted By: <span class="commenter"><%= commenter %></span></p></div>';
  var commentTemplate = document.getElementById("comment-template").innerHTML;
  //create template function
  var templateFn = _.template(commentTemplate);
  var commentsDiv = document.getElementById("comments");
  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}

function createPost() {
  var title = document.getElementById("postTitle").value;
  var body = document.getElementById("postBody").value;
  var author = document.getElementById("postAuthor").value;
  var postTemplate = document.getElementById("post-template").innerHTML;
  //create template function
  var templateFn = _.template(postTemplate);
  var postDiv = document.getElementById("post");
  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'title': title, 'body': body, 'author': author });
  //append rather than replace!
  postDiv.innerHTML = templateHTML;
}
