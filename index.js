function createPost() {

  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var post = document.getElementById("postBody").value;

  var pager = document.getElementById("page-template").innerHTML;
  var poster = document.getElementById("post-template").innerHTML;
  var commentser =document.getElementById("comments-template").innerHTML;

  var pageTemplate = _.template(pager);
  var postTemplate = _.template(poster);
  var commentsTemplate = _.template(commentser);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var blogSection = postTemplate({ 'postTitle': postTitle, 'postContent': post, 'postAuthor': postAuthor });

  var commentsSection = commentsTemplate();

  var postElement = document.getElementById("post");

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}



function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;

  var commentTemplate = document.getElementById("comment-template").innerHTML;
  //create template function
  var templateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById("comments");

  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}
