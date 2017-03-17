function createPost(){
	var header = document.getElementById("postTitle").value;
	var body = document.getElementById("postBody").value;
	var footer = document.getElementById("postAuthor").value;

	var postTemplate = _.template(document.getElementById("post-template").innerHTML);
	var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
	var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

	document.querySelector('main').innerHTML += pageTemplate();
	document.getElementById('post').innerHTML += postTemplate({'header': header, 'body': body, 'footer': footer});
	document.querySelector('footer').innerHTML += commentsTemplate();
}

function postComment(){
	var comment = document.getElementById("comment").value;
	var commenter = document.getElementById("commenter").value;

	var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
	document.getElementById('comments').innerHTML += commentTemplate({'commenter': commenter, 'comment': comment});
}