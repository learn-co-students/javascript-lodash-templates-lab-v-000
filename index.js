function postComment() {
  var commentTemplate = document.querySelector('#comment-template').innerHTML;
  var commentFn = _.template(commentTemplate);

  var comment = document.querySelector('#comment-input').value;
  var commenter = document.querySelector('#commenter-input').value;

  var commentHTML = commentFn({comment: comment, commenter: commenter});

  var commentsDiv = document.querySelector('#comments');

  commentsDiv.innerHTML += commentHTML;
}

function createPost() {
  // create page
  var pageTemplate = document.querySelector('#page-template').innerHTML;
  var pageFn = _.template(pageTemplate);

  var page = document.querySelector('#page');

  page.innerHTML += pageFn();

  // post post
  var postTemplate = document.querySelector('#post-template').innerHTML;
  var postFn = _.template(postTemplate);

  var postTitle = document.querySelector('#post-title-in').value;
  var postBody = document.querySelector('#post-body-in').value;
  var postAuthor = document.querySelector('#post-author-in').value;

  var postHTML = postFn({title: postTitle, body: postBody, author: postAuthor});

  var postDiv = document.querySelector('#post');

  postDiv.innerHTML += postHTML;

  // add comments section
  var commentsTemplate = document.querySelector('#comments-template').innerHTML;
  var commentsFn = _.template(commentsTemplate);

  var commentsDiv = document.querySelector('.comments');
  commentsDiv.innerHTML += commentsFn();

}
