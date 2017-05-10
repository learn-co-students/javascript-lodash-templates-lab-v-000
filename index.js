function createPost() {
  var title = document.getElementById("postTitle").value;
  var body = document.getElementById("postBody").value;
  var author = document.getElementById("postAuthor").value;

  var pageTemplate = document.getElementById("page-template").innerHTML;
  var postTemplate = document.getElementById("post-template").innerHTML;
  var commentsTemplate = document.getElementById("comments-template").innerHTML;


  var pageTemplateFn = _.template(pageTemplate);
  var postTemplateFn = _.template(postTemplate);
  var commentsTemplateFn = _.template(commentsTemplate);

  var pageTemplateHTML = pageTemplateFn();
  var postTemplateHTML = pageTemplateFn({title: title, body: body, author: author});
  var commentsTemplateHTML = commentsTemplateFn();

  var pageDiv = document.getElementById("posts");
  pageDiv.innerHTML += pageTemplateHTML;

  var postDiv = document.getElementById("post");
  postDiv.innerHTML += postTemplateHTML;

  var article = document.querySelector('article');
  article.innerHTML += commentsTemplateHTML;
}


function postComment() {
  var comment = document.getElementById("commentBody").value;
  var commenter = document.getElementById("commenter").value;

  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var commentTemplateFn = _.template(commentTemplate);

  var commentTemplateHTML = commentTemplateFn({comment: comment, commenter: commenter});

  var commentsDiv = document.getElementById("comments");
  commentsDiv.innerHTML += commentTemplateHTML;
}
