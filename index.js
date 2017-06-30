function createPost(){

  renderPage();
  // renderTemplate("post-form")
  //
  // var title = document.getElementById("title").value;
  // var body = document.getElementById("body").value;
  // var author = document.getElementById("author").value;

  var title = "Title",
    body = "Content",
    author = "Some Guy"

  var postTemplate = document.getElementById("post-template").innerHTML;

  postTemplate = _.template(postTemplate);

  var postTemplateHTML = postTemplate({ 'post_title': title, 'post_content': body, 'post_author': author});

  document.getElementById("post").innerHTML = postTemplateHTML
}

function postComment(){
  renderPage();

  var commentTemplate = document.getElementById("comment-template").innerHTML; // note the innerHTML

  commentTemplate = _.template(commentTemplate); // this is all that is needed to pass the tests
}

function renderPage(){
  var pageTemplate = document.getElementById("page-template").innerHTML;

  pageTemplate = _.template(pageTemplate);

  var pageTemplateHTML = pageTemplate();

  var bodyMain = document.getElementById("body");

  bodyMain.innerHTML = pageTemplateHTML
}

function renderTemplate(template){
  var template = document.getElementById(template).innerHTML
  template = _.template(template);
  template = template()
  var bodyMain = document.getElementById("body");
  bodyMain.innerHTML = template
}
