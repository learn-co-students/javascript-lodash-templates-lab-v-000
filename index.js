function createPost() {
  var title = document.getElementById("postTitle").value;
  var author = document.getElementById("postAuthor").value;
  var body = document.getElementById("postBody").value;

  //insert post into "posts" div in this format:

  var postTemplate = document.getElementById("post-template").innerHTML;

  var templateFn = _.template(postTemplate);

  var postDiv = document.getElementById("posts");

   var templateHTML = templateFn({ 'postTitle': postTitle, 'postAuthor': postAuthor, 'postBody': postBody });

   postDiv.innerHTML += templateHTML;

}

function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
}
