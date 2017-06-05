function createPost() {
    
    // templates
    var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
    
    var postTemplate = _.template(document.getElementById("post-template").innerHTML);
    
    var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
    
    // values
    var postTitle = document.getElementById("postTitle").value;
    var postAuthor = document.getElementById("postAuthor").value;
    var postText = document.getElementById("postText").value;
    
    //add template to gage instad of replacing inner html
    document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
    
    //fill in postTemplate with collected information
    var blog = postTemplate({ 'title': postTitle, 'body': post, 'poster': postAuthor });
    
    //select the element to post the blog
    var post = document.getElementById("post");
    
    //add the new blog to the section and add a comments section
    post.innerHTML = blog
    post.getElementsByTagName("footer")[0].innerHTML = commentsTemplate();
}

function postComment() {
    
    // templates
    var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
    
    // values
    var commenter = document.getElementById("commenter").value;
    var commentText = document.getElementById("commentText").value;
    
    //select the comments area
    var commentsArea = document.getElementById("comments");
    
    //add the comment to the area without replacing the existing comments
    commentsArea.innerHTML += commentTemplate({ 'commenter': commenter, 'comment': commentText });
}