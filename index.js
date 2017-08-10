function apostComment() {
	// Grabs the values of teh Comment Form
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;

  	// Grabs all the comments on this post
  var comments = document.getElementById("comments");

  	// Grabs the comment-template in string format
  // var commentTemplate = document.getElementById("comment-template").innerHTML;

  	// Creates a template function from the comment-template string
  // var templateFn = _.template(commentTemplate);

  	// Combines the top two commented out functions in one step...
  var templateFn = _.template(document.getElementById("comment-template").innerHTML);

  	// Creates a new Comment
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter
});

  	// Adds the new comment to all comments.
  comments.innerHTML += templateHTML;
}

function createPost() {
    // Grabs the values of the Post Form
  var title = document.getElementById("postTitle").value;
  var author = document.getElementById("author").value;
  var body = document.getElementById("postBody").value;

  // Grabs the various templates in a string form
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentTemplate = _.template(document.getElementById("comments-template").innerHTML);

  // Adds a new pageTemplate to the main document.
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  // Grabs the div of all current posts
  var posts = document.getElementById("post");

  // Creates a new Post
  var newPost = postTemplate({"title": title, "body": body, "author": author});

  // Adds the newly created posts to our div posts.
  posts.innerHTML += newPost;

  // Adds the Comment Form to the footer of our newly created post.
  posts.getElementsByTagName("footer")[0].innerHTML += commentTemplate()
}

function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;

  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var newComment = commentTemplate({"commenter": commenter, "comment": comment});

  var comments = document.getElementById("comments");

  comments.innerHTML += newComment
}















































