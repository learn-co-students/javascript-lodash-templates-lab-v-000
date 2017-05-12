function createPost(){
  var title = document.getElementById("postTitle").value;
  var body = document.getElementById("postBody").value;
  var author = document.getElementById("postAuthor").value;

  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  postHTML = document.getElementById('post')

  postHTML.innerHTML = postTemplate({ 'title': title, 'body': body, 'poster': author });
postHTML.getElementsByTagName("footer")[0].innerHTML = commentsTemplate()
}

function postComment(){
 var comment = document.getElementById("commentText").value;
 var commenter = document.getElementById("commenter").value;
 var commentTemplate = _.template(document.getElementById("comment-template").innerHTML)

  comments = document.getElementById('comments')

 comments.innerHTML += commentTemplate({'commenter': commenter, 'comment': comment})

}
