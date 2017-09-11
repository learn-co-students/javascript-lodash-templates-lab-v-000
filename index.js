function createPost() {
  var title = document.getElementById("postTitle").value;
  var body = document.getElementById("postBody").value;
  var author = document.getElementById("postAuthor").value;
  //insert blog into "blog" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>
  var postTemplate = document.getElementById("post-template").innerHTML;
  var pageTemplate = document.getElementById('page-template').innerHTML;
  var commentsTemplate = document.getElementById("comments-template").innerHTML;
  //create template string
  //create template function
  var templateFn = _.template(postTemplate);
  var postFormDiv = document.getElementById("post-form");
  var templatePageFn = _.template(pageTemplate);
  var templateCommentsFn = _.template(commentsTemplate)
  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'title': title, 'body': body, 'author': author });
  var templatePageHTML = templatePageFn()
  var templateCommentsHTML = templateCommentsFn()

  postFormDiv.innerHTML += templatePageHTML;

  var pageDiv = document.querySelector("#post");
  pageDiv.innerHTML += templateHTML;

  var commentsDiv = document.getElementById('comments-form')
  commentsDiv.innerHTML += templateCommentsHTML
  //append rather than replace!
  //var pageDiv = document.querySelector("#pageId")
  // postDiv.innerHTML += templatePageHTML;
}

function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
  //insert comment into "comments" div in this format:
  var commentTemplate = document.getElementById("comment-template").innerHTML;
  //create template function
  var templateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById("comments");

  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}
