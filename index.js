function createPost() {
  // create templateFns
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  // get the values
  var title = document.getElementById("postTitle").value;
  var author = document.getElementById("postAuthor").value;
  var body = document.getElementById("postBody").value;

  // Add a new pageTemplate to the main
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var blogSection = postTemplate({ 'title': title, 'body': body, 'author': author });
  var commentsSection = commentsTemplate();
  var posts = document.getElementById("post");

  posts.innerHTML += blogSection;
  posts.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {
  var commentTemplate = _.template(document.getElementById('comment-template').innerHTML);
  var commentText = document.getElementById('commentText').value;
  var commenterName = document.getElementById('commenterName').value;

  var commentsSection = document.getElementById('comments');

  commentsSection.innerHTML += commentTemplate({'commenter': commenterName, 'comment': commentText});
}
