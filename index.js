function createPost() {
  //access the "params" submitted by post-form, store values  
  var postTitle = document.getElementById('postTitle').value
  var postAuthor = document.getElementById('postAuthor').value
  var postBody = document.getElementById('postBody').value

  //call lodash template functions, store them in variables to be called later
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML)
  var postTemplate = _.template(document.getElementById("post-template").innerHTML)
}

function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML)
}