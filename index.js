function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var comment = document.getElementById("comment").value;
  var commenter = document.getElementById("commenter").value;

  var commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({ 'commenter': commenter, 'comment': comment });
}

function createPost() {
  var pageTemp = _.template(document.getElementById("page-template").innerHTML);
  var postTemp = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemp = _.template(document.getElementById("comments-template").innerHTML);

  var title = document.getElementById("postTitle").value;
  var body = document.getElementById("postBody").value;
  var author = document.getElementById("postAuthor").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemp();

  var blogSection = postTemp({ 'title': title, 'body': body, 'author': author});
  var commentsSection = commentsTemp();
  var postElement = document.getElementById("post");

   postElement.innerHTML = blogSection;
   postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}
