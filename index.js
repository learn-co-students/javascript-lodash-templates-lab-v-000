function createPost() {
  // event.preventDefault();

  var title = document.getElementById("title").value;
  var body = document.getElementById("body").value;
  var author = document.getElementById("author").value;

  var pageTemplate = document.getElementById("page-template").innerHTML;
  var postTemplate = document.getElementById("post-template").innerHTML;
  var commentsTemplate = document.getElementById("comments-template").innerHTML;

  var pageTemplateFn = _.template(pageTemplate);
  var postTemplateFn = _.template(postTemplate);
  var commentsTemplateFn = _.template(commentsTemplate);

  var pageTemplateHTML = pageTemplateFn();
  var postTemplateHTML = postTemplateFn({title: title, body: body, author: author});
  var commentsTemplateHTML = commentsTemplateFn();

  var main = document.querySelector('main');
  main.innerHTML += pageTemplate;

  var post = document.getElementById('post');
  post.innerHTML += postTemplateHTML;

  var article = document.querySelector('article');
  article.innerHTML += commentsTemplateHTML;
}

function postComment() {
  // event.preventDefault();

  var commenterName = document.getElementById("commenterName").value;
  var commentText = document.getElementById("commentText").value;

  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var commentTemplateFn = _.template(commentTemplate);

  var commentTemplateHTML = commentTemplateFn(
      {commenterName: commenterName, commentText: commentText});

  var comments = document.getElementById('comments');
  comments.innerHTML += commentTemplateHTML;
}
