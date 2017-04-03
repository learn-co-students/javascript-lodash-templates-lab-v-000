function createPost() {
  // create template functions
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  // get blog values
  var postTitle = document.getElementById("blogTitle").value;
  var postAuthor = document.getElementById("blogAuthor").value;
  var postBody = document.getElementById("blogBody").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var blogSection = postTemplate({ 'title': postTitle, 'body': postBody, 'poster': postAuthor });
  var commentsSection = commentsTemplate();
  var postElement = document.getElementById("post");

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commentText = document.getElementById("comment").value;
  var commenterName = document.getElementById("commenter").value;

  var commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
}




// 1 postComment() function that collects the data from the form and sets the values as variables

// 2 sets a variable using the template in the script and converting to innerHTML

// 3 uses that variable in the template function

// 4 finds where the id is set where the data will go (comments in this case)

// 5 sets variable using the template function variable in 3

// 6 uses the variable in 4 and .innerHTML set as the variable in 5