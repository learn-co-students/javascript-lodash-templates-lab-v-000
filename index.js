function createPost () {
  // event.preventDefault();

  var postDiv = document.getElementById('post');

  if (!postDiv) {
    var pageTemplate = document.getElementById('page-template').innerHTML;
    var pageTemplateFn = _.template(pageTemplate);

    document.getElementById('main').innerHTML += pageTemplateFn();
    postDiv = document.getElementById('post');
  }

  var postTitle = document.getElementById('postTitle').value;
  var postBody = document.getElementById('postBody').value;
  var postAuthor = document.getElementById('postAuthor').value;

  var postTemplate = document.getElementById('post-template').innerHTML;
  var postTemplateFn = _.template(postTemplate);

  var commentsTemplate = document.getElementById('comments-template').innerHTML;
  var commentsTemplateFn = _.template(commentsTemplate);

  var postHTML = postTemplateFn({
    postTitle: postTitle,
    postBody: postBody,
    postAuthor: postAuthor
  });

  var commentsHTML = document.createElement('comments');
  commentsHTML.innerHTML = commentsTemplateFn();

  postDiv.innerHTML = postHTML;
  postDiv.appendChild(commentsHTML);
}

function postComment () {
  // event.preventDefault();

  var commentTemplate = document.getElementById('comment-template').innerHTML;
  var commentTemplateFn = _.template(commentTemplate);

  var commentText = document.getElementById('commentText').value;
  var commenterName = document.getElementById('commenterName').value;

  var commentsDiv = document.getElementById('comments');
  commentsDiv.innerHTML += commentTemplateFn({
    commenterName: commenterName,
    commentText: commentText
  });
}
