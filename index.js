function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;

  var commentTemplate = document.getElementById('comment-template').innerHTML;
  var templateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById('comments');

  var templateHTML = templateFn({'comment': comment, 'commenter': commenter});

  commentsDiv.innerHTML += templateHTML;
}

function createPost() {
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  var title = document.getElementById("title").value;
  var content = document.getElementById("content").value;
  var author = document.getElementById("author").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var postDiv = document.getElementById('post');
  var templateHTML = postTemplate({'title': title, 'content': content, 'author': author});

  postDiv.innerHTML += templateHTML;
  postDiv.getElementsByTagName("footer")[0].innerHTML = commentsTemplate;
}
