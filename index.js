function createPost() {

  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  const post_author = document.getElementById("post_author").value
  const post_title = document.getElementById("post_title").value
  const post_content = document.getElementById("post_content").value

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate()

  post = document.getElementById("post")
  post.innerHTML = postTemplate({ "post_author": post_author, "post_title": post_title, "post_content": post_content })
  post.innerHTML += commentsTemplate()
}

function postComment() {

  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  const comment_author = document.getElementById("comment_author").value
  const comment_content = document.getElementById("comment_content").value

  document.getElementById("comments").innerHTML += commentTemplate({ "comment_author": comment_author, "comment_content": comment_content })
}
