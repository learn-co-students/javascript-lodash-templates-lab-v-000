// index.js

function createPost() {

//Create Templete Functions
var pageTemplateFn = _.template(document.getElementById("page-template").innerHTML);
var postTemplateFn = _.template(document.getElementById("post-template").innerHTML);
var commentsTemplateFn = _.template(document.getElementById("comments-template").innerHTML);


//Get BLog Values
var title = document.querySelector('#postTitle').value
var body = document.querySelector('#postBody').value
var author = document.querySelector('#postAuthor').value

document.getElementsByTagName("main")[0].innerHTML += pageTemplateFn();

var postDiv = document.querySelector("#post");
var commentsDiv = commentsTemplateFn();

postDiv.innerHTML += postTemplateFn({ 'title': title, 'body': body, 'author': author });
postDiv.innerHTML += commentsDiv;

};


function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  // console.log(commentTemplate);
  var commenter = document.getElementById("commenter").value;
  var comment = document.getElementById("commentText").value;

  var commentsDiv = document.getElementById("comments");

  commentsDiv.innerHTML += commentTemplate({ 'commenter': commenter, 'comment': comment });
};

// 127.0.0.1/:21 GET http://127.0.0.1:3000/advance-javascript/javascript-lodash-templates-lab-v-000/node_modules/jquery/dist/jquery.min.js 404 (Not Found)
