function createPage(postHTML) {
  var sidebarContent = "Hello I am the sidebar.";
  var postContent = postHTML;

  // Build page template
  var pageTemplate = document.getElementById("page-template").innerHTML;
  var pageTemplateFn = _.template(pageTemplate);

  // Create HTML for page
  var pageHTML = pageTemplateFn({'postContent': postContent, 'sidebarContent': sidebarContent});

  // Add page HTML to main div in page
  var main = document.querySelector("main")
  main.innerHTML += pageHTML;
}

function createPost() {
  var header = document.getElementById("postTitle").value;
  var articleContent = document.getElementById("postBody").value;
  var footer = document.getElementById("postAuthor").value;

  // Building post template
  var postTemplate = document.getElementById("post-template").innerHTML;
  var postTemplateFn = _.template(postTemplate);

  // create HTML for page
  var postHTML = postTemplateFn({'header': header, 'articleContent': articleContent, 'footer': footer})

  createPage(postHTML);
  createComments();
}

function createComments() {
  var commentDiv = document.getElementById("comments-template").innerHTML;
  var main = document.querySelector("main");
  main.innerHTML += commentDiv;
}

function postComment() {
  var commenterName = document.getElementById("commenterName").value;
  var commenterComment = document.getElementById("commenterComment").value;

  var commentTemplate= document.getElementById("comment-template").innerHTML;
  var templateFn = _.template(commentTemplate);

  var commentHTML = templateFn({'commenterName': commenterName, 'commenterComment': commenterComment});

  var commentsDiv = document.getElementById("comments");
  commentsDiv.innerHTML += commentHTML;
}
