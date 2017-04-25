var counter = 1

function createPost() {
  // post variables
  var postTitle = document.getElementById('postTitle').value;
  var postContent = document.getElementById('postContent').value;
  var postAuthor = document.getElementById('postAuthor').value;
  // page structure templates
  var pageTemplateFn = _.template(document.getElementById('page-template').innerHTML);
  var postTemplateFn = _.template(document.getElementById('post-template').innerHTML);
  var commentsTemplateFn = _.template(document.getElementById('comments-template').innerHTML);
  // JSON objects
  var postTemplateHTML = postTemplateFn({'title': postTitle, 'content': postContent, 'author': postAuthor});
  // appending content
  document.getElementsByTagName('main')[0].innerHTML += pageTemplateFn();
  document.getElementById('post').innerHTML += postTemplateHTML;
  document.getElementById(`post-${counter}-comments`).innerHTML += commentsTemplateFn();
  counter++;
}

function postComment() {
  // values
  var comment = document.getElementById('comment').value;
  var commenter = document.getElementById('commenter').value;
  // template functions
  var commentTemplateFn = _.template(document.getElementById('comment-template').innerHTML);
  // JSON
  var commentTemplateHTML = commentTemplateFn({ 'comment': comment, 'commenter': commenter });

  document.getElementById('comments').innerHTML += commentTemplateHTML;
}