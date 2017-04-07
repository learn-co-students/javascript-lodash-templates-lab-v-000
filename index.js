function createPost() {
  // get form information
  var title = document.getElementById('post-title').value;
  var body = document.getElementById('post-body').value;
  var poster = document.getElementById('post-user').value;

  // grab main element
  var main = document.getElementsByTagName('main')[0]

  // creating our templates
  var postTemplate = _.template(document.getElementById('post-template').innerHTML);
  var pageTemplate = _.template(document.getElementById('page-template').innerHTML);
  var commentTemplate = _.template(document.getElementById('comments-template').innerHTML);

  // append the page view in the dom
  main.innerHTML += pageTemplate();

  // grab post element and call the post, comment Template fn;
  var postData = postTemplate({'title': title, 'body': body, 'poster': poster});
  var commentData = commentTemplate();
  var post = document.getElementById('post');

  // display the post and comment form
  post.innerHTML = postData;
  post.getElementsByTagName('footer')[0].innerHTML += commentData;
}

function postComment(){
  // get form data
  var comment = document.getElementById('comment-body').value;
  var commenter = document.getElementById('comment-user').value;

  // grab comments id;
  var comments = document.getElementById('comments');

  // create the commentTemplate
  var commentTemplate = _.template(document.getElementById('comment-template').innerHTML);
  var commentData = commentTemplate({'comment': comment, 'commenter': commenter});

  // display the comment
  comments.innerHTML += commentData;
}
