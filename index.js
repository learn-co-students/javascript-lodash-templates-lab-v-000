function createPost() {
  //get pageHTML
  var pageTemplate = document.getElementById("page-template").innerHTML;
  var pageTemplateFn = _.template(pageTemplate);
  var pageHTML = pageTemplateFn();

  //get commentsHTML
  var commentsTemplate = document.getElementById("comments-template").innerHTML;
  var commentsTemplateFn = _.template(commentsTemplate);
  var commentsHTML = commentsTemplateFn();

  //get form values
  var title = document.getElementById("title").value;
  var body = document.getElementById("body").value;
  var author = document.getElementById("author").value;

  //get postTemplate and form value into postHTML
  var postTemplate = document.getElementById("post-template").innerHTML;
  var postTemplateFn = _.template(postTemplate);
  var postHTML = postTemplateFn({'title': title, 'body': body, 'author': author});

  // add pageHTML to main
  document.getElementById("main").innerHTML += pageHTML;

  // add commentsHTML to main
  document.getElementById("main").innerHTML += commentsHTML;

  //get post div and add postHTML
  var postDiv = document.getElementById("post")
  postDiv.innerHTML = postHTML;
}

function postComment() {
  debugger;
  //get form values
  var commentText = document.getElementById("commentText").value;
  var commenter = document.getElementById("commenter").value;

  //get commentTemplate and form values into commentHTML
  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var commentTemplateFn = _.template(commentTemplate);
  var commentHTML = commentTemplateFn({'commentText': commentText, 'commenter': commenter});

  //get commentDiv and add comment
  var commentsDiv = document.getElementById("comments");
  commentsDiv.innerHTML += commentHTML;
}
