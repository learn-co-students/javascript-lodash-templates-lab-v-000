function createPost() {
  var title = document.getElementById("postTitle").value;
  var author = document.getElementById("postAuthor").value;

  var pageTemplate =  document.getElementById("page-template").innerHTML
  var commentsTemplate = document.getElementById("comments-template").innerHTML
  var postTemplate = document.getElementById("post-template").innerHTML


  var pageFn = _.template(pageTemplate);
  var commentFn = _.template(commentsTemplate);
  var postFn = _.template(postTemplate);
}



function postComment(){
var commentTemplate = document.getElementById("comment-template").innerHTML
var commentFn = _.template(commentTemplate);

}
