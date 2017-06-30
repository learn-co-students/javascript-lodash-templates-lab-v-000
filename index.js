function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;

  //insert comment into "comments" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>

  //create template string - THIS IS THE ONLY LINE WE HAVE TO CHANGE
  //var commentTemplate = '<div class="comment"><p><%= comment %></p><p>Posted By: <span class="commenter"><%= commenter %></span></p></div>';
  var commentTemplate = document.getElementById("comment-template").innerHTML;

  //create template function
  var templateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById("comments-template");

  //execute template function with JSON object for the interpolated values
  var commentHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  //append rather than replace!
  commentsDiv.innerHTML += commentHTML;
}

function createPost() {
  var title = document.getElementById("title").value;
  var body = document.getElementById("body").value;
  var author = document.getElementById("author").value;

  //insert post into "page" div in this format:
  var pageTemplate = document.getElementById("page-template").innerHTML;
  var postTemplate = document.getElementById("post-template").innerHTML;

  //create template function
  var postTemplateFn = _.template(postTemplate);
  var pageTemplateFn = _.template(pageTemplate);

  var postDiv = document.getElementById("page");

  //execute template function with JSON object for the interpolated values
  var postHTML = postTemplateFn({ 'title': title, 'body': body, 'author': author });

  //append rather than replace!
  //postDiv.innerHTML += postHTML;
}
