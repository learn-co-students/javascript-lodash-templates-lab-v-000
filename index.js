var createPost = () => { 
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML); 
  var postTemplate = _.template(document.getElementById("post-template").innerHTML); 
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML); 
  
  var postTitle = document.getElementById("postTitle").value; 
  var postBody = document.getElementById("postBody").value; 
  var poster = document.getElementById("poster").value; 

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate(); 

  var postHTML = postTemplate({'title': postTitle,'body': postBody, 'author': poster });
  var commentsHTML = commentsTemplate(); 
  var postElement = document.getElementById("post"); 

  postElement.innerHTML = postHTML; 
  postElement.getElementsByTagName("footer")[0].innerHTML += commentsHTML; 
}

var postComment = () => { 
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML); 

  var comment = document.getElementById("commentText").value; 
  var commenterName = document.getElementById("commenterName").value; 

  var commentsSection = document.getElementById("comments"); 
  commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': comment });  
}
