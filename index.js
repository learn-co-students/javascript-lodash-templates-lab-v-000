function createPost() {
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML)
  var postTemplate = _.template(document.getElementById("post-template").innerHTML)
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML)

  var title = document.getElementById("postTitle").value
  var content = document.getElementById("postContent").value
  var author = document.getElementById("postAuthor").value

  if (document.getElementById("post") === null) {
    document.getElementsByTagName("main")[0].innerHTML += pageTemplate()
  }

  var postHTML = postTemplate({'title': title, 'content': content, 'author': author})
  var post = document.getElementById("post")
  var commentsSection = commentsTemplate()

  post.innerHTML += postHTML
  post.getElementsByTagName("footer")[0].innerHTML += commentsSection
}


function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML)

  var comment = document.getElementById("commentText").value
  var commenter = document.getElementById("commenterName").value

  var commentsDiv = document.getElementById("comments")
  var commentHTML = commentTemplate({'comment': comment, 'commenter': commenter})

  commentsDiv.innerHTML += commentHTML
}
