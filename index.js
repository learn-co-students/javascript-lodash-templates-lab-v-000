function createPost() {
  // debugger
  let postTitle = document.getElementById("postTitle").value;
  let postAuthor = document.getElementById("postAuthor").value;
  let post = document.getElementById("postBody").value;
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let postTemplate = _.template(document.getElementById("post-template").innerHTML);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
  document.getElementsByTagName("main")[0].innerHTML += commentsTemplate();


  document.getElementById("post").innerHTML += postTemplate({ 'postTitle' : postTitle, 'postAuthor' : postAuthor, 'post' : post})


}

function postComment() {

  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  let commenter = document.getElementById("commenterName").value;
  let comment = document.getElementById("commentText").value;

  document.getElementById('comments').innerHTML += commentTemplate({'comment' : comment, 'commenter' : commenter})
}
