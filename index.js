function createPost(){
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var post = document.getElementById("postBody").value;
}


function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commenterName = document.getElementById("commenter").value;
  var commentText = document.getElementById("commentText").value;

}
