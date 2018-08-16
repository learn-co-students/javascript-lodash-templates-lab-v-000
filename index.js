function createPost() {
  var postTitle = document.getElementById("postTitle").value;
  var postBody = document.getElementById("postBody").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var postTemplate = document.getElementById("post-template").innerHTML;
  var pageTemplate = document.getElementById("page-template").innerHTML;
  var commentsTemplate = document.getElementById("comments-template").innerHTML;

  var postTemplateFn = _.template(postTemplate);
  var pageTemplateFn = _.template(pageTemplate);
  var commentsTemplateFn = _.template(commentsTemplate);
  
  var post = postTemplateFn({ 'postTitle': postTitle, 'postBody': postBody, 'postAuthor': postAuthor });

  
  document.getElementsByTagName("main")[0].innerHTML += pageTemplateFn();
  var postElement = document.getElementById("post");
  
  postElement.innerHTML += post;
  postElement.getElementsByTagName("footer")[0].innerHTML += commentsTemplateFn();
}


function postComment() {
  var commenter = document.getElementById("commenter").value;
  var commentText = document.getElementById("commentText").value;

  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var templateFn = _.template(commentTemplate);
 
  var commentsDiv = document.getElementById("comments");
 
  var templateHTML = templateFn({ 'commentText': commentText, 'commenter': commenter });

  commentsDiv.innerHTML += templateHTML;
}

