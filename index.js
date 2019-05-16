function createPost() {
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML)
  var postTemplate = _.template(document.getElementById("post-template").innerHTML)
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML)

  var postTitle = document.getElementById("postTitle").value
  var postContent = document.getElementById("postContent").value
  var postAuthor = document.getElementById("postAuthor").value

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate()

  var postedPost = postTemplate({ 'postTitle': postTitle, 'postContent': postContent, 'postAuthor': postAuthor })
  var commentsSection = commentsTemplate()
  postedPost += commentsSection

  document.getElementById("post").innerHTML += postedPost
}
function postComment() {
  var commentContent = document.getElementById("commentContent").value
  var commentAuthor = document.getElementById("commentAuthor").value

  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML)

  var postedComment = commentTemplate({ 'commentContent': commentContent, 'commentAuthor': commentAuthor })
  document.getElementById("comments").innerHTML += postedComment
}
