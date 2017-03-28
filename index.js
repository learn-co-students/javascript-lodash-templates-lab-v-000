
function createPost() {
  var postTitle = document.getElementById("post-title").value
  var postBody = document.getElementById("post-body").value
  var postAuthor = document.getElementById("post-author").value

  //get lodash templates
  var postTemplate = document.getElementById("post-template").innerHTML
  var pageTemplate = document.getElementById("page-template").innerHTML
  var commentTemplate = document.getElementById("comments-template").innerHTML

  //create template function
  var postTemplateFn = _.template(postTemplate)
  var templatePageFn = _.template(pageTemplate)
  var commentTemplateFn = _.template(commentTemplate)

  //find blog post area
  var postDiv = document.getElementById("blog-post")
  var pageDiv = document.getElementById("blog-page")
  var commentDiv = document.getElementById("comment-post")

  //execute template function with JSON object
  var postTemplateHTML = postTemplateFn({ "postTitle": postTitle, "postBody": postBody, "postAuthor": postAuthor})
//  var templatePageHTML = templatePageFn({ "sidebar": postBody, "post": postAuthor})
  var commentTemplateHTML = commentTemplateFn({})

  //append rather than replace
  postDiv.innerHTML += postTemplateHTML
  //pageDiv.innerHTML += templatePageHTML
  commentDiv.innerHTML += commentTemplateHTML

}

function postComment() {
  var commentBody = document.getElementById("comment-body").value
  var commenterName = document.getElementById("commenter-name").value

  //get lodash templates
  var commentTemplate = document.getElementById("comment-template").innerHTML

  //create template function
  var templateFn = _.template(commentTemplate)

  //find blog post area
  var commentDiv = document.getElementById("comment-post")

  //execute template function with JSON object
  var templateHTML = templateFn({ "commentBody": commentBody, "commenterName": commenterName })

  //append rather than replace
  commentDiv.innerHTML += templateHTML

}
