function createPost() {
  let title = document.getElementById('postTitle').value;
  let author = document.getElementById('postAuthor').value;
  let body = document.getElementById('postBody').value;

  let postTemplateFn = _.template(document.getElementById('post-template').innerHTML);
  let pageTemplateFn = _.template(document.getElementById('page-template').innerHTML);
  let commentsTemplateFn = _.template(document.getElementById('comments-template').innerHTML);

  let postHTML = postTemplateFn({ 'postTitle': title, 'postBody': body, 'postAuthor': author });

  let pages = document.getElementById('pages');
  pages.innerHTML += pageTemplateFn();

  let postDiv = document.getElementById('post');
  postDiv.innerHTML = postHTML;

  document.getElementById('commentsDiv').innerHTML = commentsTemplateFn();
}

function postComment() {
  let commenter = document.getElementById("commenterName").value;
  let comment = document.getElementById("commentBody").value;

  let commentsDiv = document.getElementById('comments');

  let commentTemplate = _.template(document.getElementById('comment-template').innerHTML);
  commentsDiv.innerHTML += commentTemplate({ 'commenterName': commenter, 'commentBody': comment });
}
