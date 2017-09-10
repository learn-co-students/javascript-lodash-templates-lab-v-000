function createPost(){
  //get the post  
  var postBody = document.getElementById("postBody").value
  var postAuthor = document.getElementById("postAuthor").value
  var postTitle = document.getElementById("postTitle").value

  //make the page     
  var pageTemplate = document.getElementById("page-template").innerHTML
  var pageFn = _.template(pageTemplate)
  pageHtml = pageFn();
  document.getElementById("post-form").hidden = true;
  document.getElementsByTagName('main')[0].innerHTML += pageHtml
  
  //generate post & comment closures
  var postTemplate = document.getElementById("post-template").innerHTML
  var postFn = _.template(postTemplate);
  var commentsTemplate = document.getElementById("comments-template").innerHTML
  var commentsFn = _.template(commentsTemplate)
  
  //generate post & comment content
  var postContent = postFn({ 'title': postTitle, 'body': postBody, 'author': postAuthor })
  var commentsContent = commentsFn()
  
  //append post & comment content
  var postSection = document.getElementById("post")
  postSection.innerHTML = postContent
  var commentSection = document.getElementById("commentsFooter")
  commentSection.innerHTML += commentsContent
}

function postComment(){
  debugger
  //get comments
  var commentBody = document.getElementById("commentText").value
  var commentAuthor = document.getElementById("commenterName").value

  //generate closure                                        
  var commentFn = _.template(document.getElementById("comment-template").innerHTML)
  debugger

  //generate comment content
  var commentContent = commentFn({'comment': commentBody, 'commentAuthor':commentAuthor})
  debugger
   document.getElementById("commentsFooter").innerHTML += commentContent
}