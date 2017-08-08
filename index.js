function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var templateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById("comments");
  var templateHTML = templateFn({'comment': comment, 'commenter': commenter});

  commentsDiv.innerHTML += templateHTML;
}

function createPost() {
  var title = document.getElementById("postTitle").value;
  var post = document.getElementById("postBody").value;
  var author = document.getElementById("postAuthor").value;

  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var commentTemplate = _.template(document.getElementById("comments-template").innerHTML);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var postDiv = document.getElementById("post");
  var postHTML = postTemplate({'title': title, 'post': post, 'author': author});
  var commentsSection = commentTemplate();

  postDiv.innerHTML += postHTML;
  postDiv.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}
