function createPost() {
	var title = document.getElementById("post").value;
  	var author = document.getElementById("author").value;
  	var post = document.getElementById("body").value;

  	var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  	var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  	var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  	document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  	var post = postTemplate({'title': title, 'body': body, 'author': author});
  	var commentsSection = commentsTemplate();
  	var postElement = document.getElementById("post");

  	postElement.innerHTML = post;
  	postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;

}

function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var comment = document.getElementById("comment").value;
  var author = document.getElementById("author").value;

  var comments = document.getElementById("comments");
  comments.innerHTML += commentTemplate({ 'author': author, 'comment': comment });
}