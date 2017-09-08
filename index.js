function createPost(){
  var title = document.getElementById("postTitle").value;
  var body = document.getElementById("postBody").value;
  var author = document.getElementById("postAuthor").value;

  var postTemplate = _.template(document.getElementById("post-template").innerHTML)

  var pageTemplate = _.template(document.getElementById("page-template").innerHTML)

  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML)

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate()

  var postDiv = document.getElementById("post");
  var commentsSection = commentsTemplate()


  var templateHTML = postTemplate({ 'title': title, 'body': body, 'author':author});

  postDiv.innerHTML = templateHTML
  postDiv.getElementsByTagName("footer")[0].innerHTML += commentsSection
}

function postComment(){
  var commentText = document.getElementById("commentText").value;
  var commentAuthor = document.getElementById("commentAuthor").value;

  var commentTemplate = document.getElementById("comment-template").innerHTML

  var templateFN = _.template(commentTemplate);

  var commentsDiv = document.getElementById("comments");

  var templateHTML = templateFN({ 'commentText': commentText, 'commentAuthor': commentAuthor});

  commentsDiv.innerHTML += templateHTML

}