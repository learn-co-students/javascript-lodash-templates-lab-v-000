function createPost() {
  //create template functions
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML)
  var postTemplate = _.template(document.getElementById("post-template").innerHTML)
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML)

  //get values from the blog
  var postTitle = document.getElementById("postTitle").value
  var postAuthor = document.getElementById("postAuthor").value
  var postBody = document.getElementById("postBody").value

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate()

  var blogSection = postTemplate({ 'title': postTitle, 'body': postBody, 'author': postAuthor })
  var commentsSection = commentsTemplate()
  var postElement = document.getElementById("post")

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {
  //create template function
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML)

  //get values
  var commentText = document.getElementById("commentText").value
  var commenterName = document.getElementById("commenterName").value

  var commentsDiv = document.getElementById("comments")
  var templateHTML = commentTemplate({ 'comment': commentText, 'commenter': commenterName })
  commentsDiv.innerHTML += templateHTML
}
