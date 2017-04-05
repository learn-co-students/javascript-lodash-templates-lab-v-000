function createPost(){
	var postTitle = document.getElementById('postTitle').value
	var postAuthor = document.getElementById('postAuthor').value
  	var postBody = document.getElementById('postBody').value
	var pageTemplate = _.template(document.getElementById("page-template").innerHTML)
 	var postTemplate = _.template(document.getElementById("post-template").innerHTML)
}

function postComment(){
	var commentTemplate = _.template(document.getElementById('comment-template').innerHTML)
}