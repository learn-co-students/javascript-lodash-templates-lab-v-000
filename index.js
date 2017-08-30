function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
  //insert comment into "comments" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>
  var commentTemplate = document.getElementById("comments-template").innerHTML;
  //create template function
  var templateFn = _.template(commentsTemplate);
  var commentsDiv = document.getElementById("comments");
  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}

function createPost() {

}
