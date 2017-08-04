function createPost() {
    var postTemplate =  _.template(document.getElementById("post-template").innerHTML);
    var pageTemplate =  _.template(document.getElementById("page-template").innerHTML);
    var commentsTemplate =  _.template(document.getElementById("comments-template").innerHTML);

    var postTitle = document.getElementById("postTitle").value;
    var postMessage = document.getElementById("postMessage").value;
    var postAuthor = document.getElementById("postAuthor").value;

    var postsDiv = document.getElementById("posts")

    var templateHTML = postTemplate({ 'title': postTitle, 'body': postMessage, 'author': postAuthor });

    debugger;
    postsDiv.innerHTML += templateHTML;
    // document.getElementById("post").innerHTML = commentsTemplate
}

function postComment() {
    var commentTemplate =  _.template(document.getElementById("comment-template").innerHTML);

    var commentText = document.getElementById("commentText");
    var commenter = document.getElementById("commenter")


}