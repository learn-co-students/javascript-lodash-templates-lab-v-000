function createPost (){
  var postBody = document.getElementById("postBody").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var postTitle = document.getElementById("postTitle").value;
  var commentsTemplate = document.getElementById("comments-template").innerHTML;

  var postTemplate = document.getElementById("post-template").innerHTML;
  var pageTemplate = document.getElementById("page-template").innerHTML;


  var templatePostFn = _.template(postTemplate);
  var templatePageFn = _.template(pageTemplate);
  var templateCommentsFn = _.template(commentsTemplate);

  document.getElementsByTagName("main")[0].innerHTML +=  templatePageFn();

  var postDiv =  document.getElementById("post");
  var templateHTML = templatePostFn({'postBody': postBody, 'author': postAuthor, 'title': postTitle})
  var commentsSection = templateCommentsFn();
  postDiv.innerHTML = templateHTML;
  postDiv.getElementsByTagName("footer")[0].innerHTML += commentsSection;
};


function postComment(){

  var comment = document.getElementById("commentText").value;
  var commenter = document.getElementById("commenterName").value;
  var commentTemplate = document.getElementById("comment-template").innerHTML;

  var templateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById("comments");

  var templateHTML = templateFn({'comment': comment, 'commenter': commenter});

  commentsDiv.innerHTML += templateHTML;
};
