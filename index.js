function createPost(){
  var title = document.getElementById("postTitle").value;
  var author = document.getElementById("postAuthor").value;
  var body = document.getElementById("postBody").value
  
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var commentsDiv = commentsTemplate();
  var postDiv = document.getElementById("post");

  var templateHTML = postTemplate({ 'title': title, 'author': author, 'body': body});

  postDiv.innerHTML = templateHTML;
  postDiv.getElementsByTagName("footer")[0].innerHTML = commentsDiv;


}

function postComment(){
  var commenter = document.getElementById("commenter").value;
  var comment = document.getElementById("commentText").value;
  
  var commentsTemplate = document.getElementById("comment-template").innerHTML;

  var commentsTemplateFn = _.template(commentsTemplate);

  var commentsDiv = document.getElementById("comments");

  var templateHTML = commentsTemplateFn({ 'commenter': commenter, 'comment': comment});

  commentsDiv.innerHTML += templateHTML;
}