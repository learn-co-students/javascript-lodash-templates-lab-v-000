function createPost(){
  var title = document.getElementById('postTitle').value;
  var content = document.getElementById('postContent').value;
  var author = document.getElementById('postAuthor').value;

  var pageTemplate = _.template(document.getElementById('page-template').innerHTML);
  var postTemplate = _.template(document.getElementById('post-template').innerHTML);
  var commentsTemplate = _.template(document.getElementById('comments-template').innerHTML);

  var postTemplateHTML = postTemplate({'title': title, 'content': content, 'author': author});

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var postElement = document.getElementById("post");
  postElement.innerHTML += postTemplateHTML

  document.getElementsByTagName("main")[0].innerHTML += commentsTemplate();
}

function postComment(){
  var commenter = document.getElementById('commentAuthor').value
  var commentText = document.getElementById('commentContent').value

  // var commentText
  var commentTemplate = _.template(document.getElementById('comment-template').innerHTML)

  var commentHTML = commentTemplate({'comment': commentText, 'commenter': commenter})

  var comments = document.getElementById('comments')
  comments.innerHTML += commentHTML

}
