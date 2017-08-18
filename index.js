function createPost() {
  console.log("works")
  var ctitle = document.getElementById("commentTitle").value;
  var cbody = document.getElementById("commentBody").value;
  var cauthor = document.getElementById("commentAuthor").value;
  var pageTemplate = document.getElementById("page-template").innerHTML;
  var templateFn = _.template(pageTemplate);
  var postsDiv = document.getElementById("posts");
  var templateHTML = templateFn({ 'ctitle': ctitle, 'cbody': cbody, 'cauthor': cauthor });
  postsDiv.innerHTML += templateHTML;
}

function postComment() {

}
