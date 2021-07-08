function createPost() {
  var author = document.getElementById("author").value;
  var title = document.getElementById("title").value;
  var content = document.getElementById("postText").value;


 var postTemplate = document.getElementById('post-template').innerHTML
 var templateFn = _.template(postTemplate);

  var postdiv = document.getElementById("blogPost");


  var templateHTML = templateFn({ 'author': author, 'title': title, 'post':content });


  postdiv.innerHTML += templateHTML;

  var pageTemplate= document.getElementById('page-template').innerHTML;
  var pagetemplateFn = _.template(pageTemplate);
  var pagediv=document.getElementById("blogpage");
  var pagetemplateHTML = pagetemplateFn({ 'postdiv':postdiv});
  pagediv.innerHTML += pagetemplateHTML;
  }

  function postComment() {
    var comment = document.getElementById("commenttext").value;
    var commenter = document.getElementById("commenter").value;



   //var commentTemplate = document.getElementById('comment-template').innerHTML;
   var commenttemplateFn = _.template(document.getElementById('comment-template').innerHTML);

    var commentPost = document.getElementById("commentPosted");


    var templateHTML = commenttemplateFn({ 'comment': comment, 'commenter': commenter });


    commentPost.innerHTML += templateHTML;

    var pageTemplate= document.getElementById('comments-template').innerHTML;
    var pagetemplateFn = _.template(pageTemplate);
    var pagediv=document.getElementById('commentsPage');
    var pagetemplateHTML = pagetemplateFn({ 'pagediv':pagediv});
    pagediv.innerHTML += pagetemplateHTML;
    }
