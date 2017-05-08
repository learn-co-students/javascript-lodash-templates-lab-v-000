function createPost() {
  var title = document.getElementById('postTitle').value;
  var body = document.getElementById('postBody').value;
  var author = document.getElementById('postAuthor').value;

  var pageTemplate = document.getElementById('page-template').innerHTML;
  var postTemplate = document.getElementById('post-template').innerHTML;
  var commentTemplate = document.getElementById('comments-template').innerHTML;

  var templatePostFn = _.template(pageTemplate);
  var templateFn = _.template(postTemplate);

  var postDiv = document.getElementById('article');
  

  var templateHTML = templateFn({ 'header': title, 'body': body, 'footer': author})
  var templatePost = templatePostFn({ 'post': templateHTML })


  postDiv.innerHTML += templatePost;
  postDiv.innerHTML += commentTemplate

}

function postComment() {
  var user = document.getElementById('commenterName').value;
  var comment = document.getElementById('comment').value;

  var commentTemplate = document.getElementById('comment-template').innerHTML;
  var templateCommentFn = _.template(commentTemplate);
  var templateComment = templateCommentFn({ 'comment': comment, 'user': user });

  var commentDiv = document.getElementById('comments');
  commentDiv.innerHTML += templateComment





}