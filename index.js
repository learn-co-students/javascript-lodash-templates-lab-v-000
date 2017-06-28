function createPost() {
  var postTitle = document.getElementById("postTitle").value;
  var postBody = document.getElementById("postBody").value;
  var postAuthor = document.getElementById("postAuthor").value;


  //add page template
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  document.getElementById("pages").innerHTML += pageTemplate();

  //add post template
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var postDiv = document.getElementById("post");
  var postHTML = postTemplate({ 'postTitle': postTitle, 'postBody': postBody, 'postAuthor': postAuthor });
  postDiv.innerHTML = postHTML;


  //add comments template
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  document.getElementById("comments-div").innerHTML = commentsTemplate();

}

function postComment() {
  var commenter = document.getElementById("commenter").value;
  var comment = document.getElementById("comment").value;
  //insert comment into "comments" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>

    //create template function
  var templateFn = _.template(document.getElementById("comment-template").innerHTML);

  var commentsDiv = document.getElementById("comments");

  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}
