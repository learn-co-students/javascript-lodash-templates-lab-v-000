function createPost() {
  var title = document.getElementById("postTitle").value;
  var content = document.getElementById("postBody").value;
  var author = document.getElementById("postAuthor").value;

  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var newPost = postTemplate({ 'title': title, 'body': content, 'author': author })
  var newPostCommentSection = commentsTemplate();

  var newPostSection = document.getElementById("post");

  newPostSection.innerHTML = newPost;
  newPostSection.getElementsByTagName("footer")[0].innerHTML = newPostCommentSection;
}

function postComment() {
  var author = document.getElementById("commentAuthor").value;
  var text = document.getElementById("commentText").value;

  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({ 'commenter': author, 'comment': text });
}
