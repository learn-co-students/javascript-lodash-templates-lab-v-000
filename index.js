function createPost(){
  var title = document.getElementById('postTitle').value;
  var content = document.getElementById('postContent').value;
  var author = document.getElementById('postAuthor').value;

  var pageTemplate = _.template(document.getElementById('page-template').innerHTML);
  var postTemplate = _.template(document.getElementById('post-template').innerHTML);
  // var templateComments = _.template(document.getElementById('comments-template').innerHTML);

  var postTemplateHTML = postTemplate({'title': title, 'content': content, 'author': author});

  document.getElementsByTagName("main").innerHTML += pageTemplate();
  var postElement = document.getElementById("post");
  postElement.innerHTML += templatePostHTML
}

function postComment(){

}
