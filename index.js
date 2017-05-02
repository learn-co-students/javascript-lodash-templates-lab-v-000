function createPost() {
  var title = document.getElementById('post-title').value;
  var body = document.getElementById('post-body').value;
  var author = document.getElementById('post-author').value;

  var pageTemplate = document.getElementById('page-template').innerHTML;
  var postTemplate = document.getElementById('post-template').innerHTML;
  var commentsTemplate = document.getElementById('comments-template').innerHTML;

  var pageTemplateFn = _.template(pageTemplate)
  var postTemplateFn = _.template(postTemplate)
  var commentsTemplateFn = _.template(commentsTemplate)

  document.getElementById('main').innerHTML += pageTemplateFn();

  var postTemplateHTML = postTemplateFn({ 'title': title, 'body': body, 'author': author})
  var commentsSectionHTML = commentsTemplateFn();
  var postElement = document.getElementById('post')

  postElement.innerHTML += postTemplateHTML
  postElement.getElementsByTagName("footer")[0].innerHTML += commentsSectionHTML;
}

function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
  var commentTemplate = document.getElementById('comment-template').innerHTML;

  var commentTemplateFn = _.template(commentTemplate);
  var commentsDiv = document.getElementById('comments');
  var commentsTemplateHTML = commentTemplateFn({ 'comment': comment, 'commenter': commenter })

  commentsDiv.innerHTML += commentsTemplateHTML
}
