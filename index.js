function createPost() {
  var title = document.getElementById("titleText").value;
  var body = document.getElementById("bodyText").value;
  var author = document.getElementById("authorText").value;

  var pageTemplate = document.getElementById("page-template").innerHTML;
  var templateFn = _.template(pageTemplate);
  var pageDiv = document.getElementById('page')
  var pageTemplateHTML = templateFn();
  pageDiv.innerHTML += pageTemplateHTML;

  var postTemplate = document.getElementById("post-template").innerHTML;
  var postTemplateFn = _.template(postTemplate);
  var postDiv = document.getElementById("post");
  var postTemplateHTML = postTemplateFn({ 'postTitle': title,
                'postBody': body, 'postAuthor': author });
  postDiv.innerHTML += postTemplateHTML;

  var commentsTemplate = document.getElementById("comments-template").innerHTML;
  var commentsTemplateFn = _.template(commentsTemplate);
  var postCommentsDiv = document.getElementById("postComments");
  var commentsTemplateHTML = commentsTemplateFn();
  postCommentsDiv.innerHTML += commentsTemplateHTML;
}

function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;

  var commentTemplate = document.getElementById("comment-template").innerHTML;

  var templateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById("comments");

  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  commentsDiv.innerHTML += templateHTML;
}
