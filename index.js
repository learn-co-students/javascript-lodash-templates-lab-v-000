function createPost() {
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var post = document.getElementById("post").value;

  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var blogSection = postTemplate({
    'title': title,
    'post': post,
    'author': author
  });

  var commentsSection = commentsTemplate();
  var postElement = document.getElementById("post");

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {
  var commentText = document.getElementById("commentText").value;
  var commenterName = document.getElementById("commenter").value;

  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({
    'commenter': commenterName,
    'comment': commentText
  });
}
