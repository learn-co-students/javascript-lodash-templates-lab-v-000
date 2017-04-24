function createPost() {
  var title = document.getElementById("postTitle").value;
  var text = document.getElementById("postText").value;
  var author = document.getElementById("postAuthor").value;

  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var postDiv = postTemplate({'title': title, 'text': text, 'author': author});
  var commentsDiv = commentsTemplate();
  var postElement = document.getElementById('post');

  postElement.innerHTML = postDiv;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsDiv;
}

function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;

  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var templateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById("comments");
  var templateHTML = templateFn({'comment': comment, 'commenter': commenter});
  commentsDiv.innerHTML += templateHTML;
}
