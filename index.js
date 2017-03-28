function createPost() {
  var title = document.getElementById("postTitle").value
  var content = document.getElementById("postContent").value
  var author = document.getElementById("postAuthor").value

  var postTemplate = document.getElementById("post-template").innerHTML
  var templatePn = _.template(postTemplate)

  var pageTemplate = document.getElementById("page-template").innerHTML

  var postTemplateHTML = templatePn({'title': title, 'content': content, 'author': author})

  postDiv.innerHTML += postTemplateHTML
}


function postComment() {

}
