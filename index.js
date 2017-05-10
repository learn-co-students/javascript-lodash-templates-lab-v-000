function createPost() {
  var author = document.getElementById("author").value
  var body = document.getElementById("body").value
  var title = document.getElementById("title").value

  var postTemplate = document.getElementById("post-template").innerHTML
  var postTemplateFn = _.template(postTemplate)

  var templateHtml =  postTemplateFn({'title': title, 'body': body, 'author': author})

  var pageTemplate = document.getElementById("page-template").innerHTML
  var pageTemplateFn = _.template(pageTemplate)
  var pageHtml = pageTemplateFn()
  document.querySelector('main').innerHTML += pageHtml

  var post = document.getElementById("post")
  post.innerHTML += templateHtml

  postComment()

}

function postComment() {

  var commentsTemplate = document.getElementById("comments-template").innerHTML
  var commentsTemplateFn = _.template(commentsTemplate)
  var commentsHtml = commentsTemplateFn()

  document.querySelector("main").innerHTML += commentsHtml



  var comment = document.getElementById("comment").value
  var commenter = document.getElementById("commenter").value

  var commentTemplate =  document.getElementById("comment-template").innerHTML
  var commentTemplateFn = _.template(commentTemplate)
  var commentHtml = commentTemplateFn({'comment': comment, 'commenter': commenter})

  document.querySelector('main').innerHTML += commentHtml



}
