function createPost() {
  var postT = document.getElementById("postTitle").value;
  var postB = document.getElementById("postBody").value;
  var postA = document.getElementById("postAuthor").value;

  //insert comment into "comments" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>

  //create template string - THIS IS THE ONLY LINE WE HAVE TO CHANGE
  //var commentTemplate = '<div class="comment"><p><%= comment %></p><p>Posted By: <span class="commenter"><%= commenter %></span></p></div>';
  var postTemplate = document.getElementById("post-template").innerHTML;
  var pageTemplate = document.getElementById("page-template").innerHTML;
  var commentTemplate = document.getElementById("comments-template").innerHTML;

  //create template function
  var postTemplateFn = _.template(postTemplate);
  var pageTemplateFn = _.template(pageTemplate);

  //execute template function with JSON object for the interpolated values
  var postTemplateHTML = postTemplateFn({ 'postT': postT, 'postB': postB, 'postA': postA });
  var pageTemplateHTML = pageTemplateFn({ 'postTemplate': postTemplateHTML, 'commentTemplate': commentTemplate});

  //append rather than replace!
  pageTemplate.innerHTML += pageTemplateHTML;
}

function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;

  //insert comment into "comments" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>

  //create template string - THIS IS THE ONLY LINE WE HAVE TO CHANGE
  //var commentTemplate = '<div class="comment"><p><%= comment %></p><p>Posted By: <span class="commenter"><%= commenter %></span></p></div>';
  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var postTemplate = document.getElementById("post-template").innerHTML;
  var pageTemplate = document.getElementById("page-template").innerHTML;

  //create template function
  var templateFn = _.template(commentTemplate);
  var pageTemplateFn = _.template(pageTemplate);

  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
  var pageTemplateHTML = pageTemplateFn({ 'postTemplate': postTemplate,'commentTemplate': templateHTML });
  //append rather than replace!
  pageTemplate.innerHTML += templateHTML;
}
