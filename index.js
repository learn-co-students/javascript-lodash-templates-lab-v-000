function createPost() {
  //create all templates
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  //get values for post
  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var postBody = document.getElementById("postBody").value;

  //add page template to <main></main>
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate;

  var postSection = postTemplate({'title': postTitle, 'body': postBody, 'poster': postAuthor});
  var commentsSection = commentsTemplate();
  var postElement = document.getElementById("post");

  postElement.innerHTML = postSection;
  postElement.getElementsByTagName("footer")[0].innerHTML += commentsSection;
}

function postComment() {
  //create comment template
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  //get comments values
  var commentText = document.getElementById("commentText").value;
  var commenterName = document.getElementById("commenter").value;

  var commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({'commenter': commenterName, 'comment': commentText})
}
