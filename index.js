function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
  debugger;
  
  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var templateFn = _.template(commentTemplate);
  
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
  var commentsDiv = document.getElementById("comments");
  commentsDiv.innerHTML += templateHTML;
}

function createPost() {
  var title = document.getElementById("postTitle").value;
  var author = document.getElementById("postAuthor").value;
  debugger;
  
  var postTemplate = document.getElementById("post-template").innerHTML;
  var pageTemplate = document.getElementById("page-template").innerHTML;
  
  var postTemplateFn = _.template(postTemplate);
  var pageTemplateFn = _.template(pageTemplate);
  
  var postTemplateHTML = postTemplateFn({ 'title': title, 'author': author });
  var pageTemplateHTML = pageTemplateFn();
  
  var postDiv = document.getElementById("post-template");
  var pageDiv = document.getElementById("page-template");
  
  postDiv.innerHTML = postTemplateHTML;
  pageDiv.innerHTML = pageTemplateHTML;
//  debugger;
  
  //var pageTemplate = '<div id="sidebar"></div>' + postTemplate;
  //var pageFn = _.template(pageTemplate);
  //var pageHTML = pageFn();
  //var pageDiv = document.getElementById("page-template");
  //pageDiv = pageHTML;

}
