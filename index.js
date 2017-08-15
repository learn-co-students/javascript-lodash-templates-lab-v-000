function postComment() {
  var commenterName = document.getElementById("commenter").value;
  var commentText = document.getElementById("commentText").value;
  
  //insert comment into "comments" div:
  var commentTemplate = document.getElementById("comment-template").innerHTML;

  //create template function
  var templateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById("comments");
 
  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'comment': commentText, 'commenter': commenterName });
 
  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}

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