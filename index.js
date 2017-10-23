
function createPost() {
    //create blog template function
    var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
    var postTemplate = _.template(document.getElementById("post-template").innerHTML);
    var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

    // get post values
    var postTitle = document.getElementById("postTitle").value;
    var postAuthor = document.getElementById("postAuthor").value;
    var postBody = document.getElementById("postBody").value;
    
    //execute template function with JSON object for the interpolated values
    var postHTML = postTemplate({'title': postTitle, 'body': postBody, 'postAuthor': postAuthor});
    var pageHTML = pageTemplate();

    // Append page to MAIN
    document.getElementsByTagName("main")[0].innerHTML +=pageHTML;

    // Append post to Page  
    var postDiv = document.getElementById("post")
    postDiv.innerHTML += (postHTML+commentsTemplate());
};

function postComment() {
    //create comment template function
    var commentTemplate = document.getElementById("comment-template").innerHTML;
    var templateFn = _.template(commentTemplate);
   
    // get comment values
    var commenter = document.getElementById("commenterName").value;
    var comment = document.getElementById("commentText").value;
   
    //execute template function with JSON object for the interpolated values
    var commentHTML = templateFn({ 'comment': comment, 'commenter': commenter });
   
    // Append comments section 
    var commentsDiv = document.getElementById("comments");
    commentsDiv.innerHTML += commentHTML;
  }