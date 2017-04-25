
function createPost() {
  // post variables
  var postTitle = document.getElementById('postTitle').value;
  var postContent = document.getElementById('postContent').value;
  var postAuthor = document.getElementById('postAuthor').value;
  // page structure templates
  var pageTemplateFn = _.template(document.getElementById('page-template').innerHTML);
  var postTemplateFn = _.template(document.getElementById('post-template').innerHTML);
  // JSON objects
  var postTemplateHTML = postTemplateFn({'title': postTitle, 'content': postContent, 'author': postAuthor});
  // appending content
  document.getElementsByTagName('main')[0].innerHTML += pageTemplateFn();
  document.getElementById('posts').innerHTML += postTemplateHTML;
}

function postComment() {

}