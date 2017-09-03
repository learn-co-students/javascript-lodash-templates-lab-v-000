function createPost() {
  var title = document.getElementById("postTitle").value;
  var author = document.getElementById("postAuthor").value;
  var post = document.getElementById("postBody").value;

  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var blogPost = postTemplate({ 'title': postTitle, 'body': postBody, 'author': postAuthor });
  var postComments = commentsTemplate();
  var postBlog = document.getElementById("post");

  //Sets sections with content
  postBlog.innerHTML = blogPost;
  postBlog.getElementsByTagName("footer")[0].innerHTML = postComments;
}

function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;

  //insert comment into "comments" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>

  //create template string - THIS IS THE ONLY LINE WE HAVE TO CHANGE
  //var commentTemplate = '<div class="comment"><p><%= comment %></p><p>Posted By: <span class="commenter"><%= commenter %></span></p></div>';

  //create template function
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commentsSection = document.getElementById("comments");

  //execute template function with JSON object for the interpolated values
  commentsSection.innerHTML += commentTemplate({ 'comment': comment, 'commenter': commenter });

}

