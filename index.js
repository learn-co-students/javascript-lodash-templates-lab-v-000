function createPost(){

  renderPage();

  // var title = document.getElementById("title").value;
  // var body = document.getElementById("body").value;
  // var author = document.getElementById("author").value;

  var title = "Title",
    body = "Content",
    author = "Some Guy"

  var postTemplate = document.getElementById("post-template");

  postTemplate = _.template(postTemplate);

  var postTemplateHTML = postTemplate({ 'post_title': title, 'post_content': body, 'post_author': author});
}

function postComment(){

}

function renderPage(){
  var pageTemplate = document.getElementById("page-template");

  pageTemplate = _.template(pageTemplate);

  var pageTemplateHTML = pageTemplate();

  var bodyMain = document.getElementById("body");

  bodyMain.innerHTML = pageTemplateHTML
}
