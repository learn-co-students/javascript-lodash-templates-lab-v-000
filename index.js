
function createPost(){
  document.body.children[0].innerHTML+=_.template(document.getElementById('page-template').innerHTML)();
  var data = {
    name: document.getElementById('post-name').value,
    content: document.getElementById('post-content').value,
    author: document.getElementById('post-author').value,
  };

  document.getElementById('post').innerHTML+=_.template(document.getElementById('post-template').innerHTML)(data);
}

function postComment(){
  document.getElementById('post').innerHTML+=_.template(document.getElementById('comments-template').innerHTML)();
  var data = {
    content: document.getElementById('comment-content').value,
    author: document.getElementById('comment-author').value,
  };

  document.getElementById('post-container').innerHTML+=_.template(document.getElementById('comment-template').innerHTML)(data);
}
