commentNode.innerHTML = "<div class='page-template'></div>"
// Create a template with an id of page-template that will represent the page of a blog post, including a sidebar element and a post element that will hold our blog post.

// Create a post-template that will represent the blog post itself. It should have a header for the post title and a footer for the post author, and be wrapped in an article element.

// Create a comments-template that will be the container for the collection of comments on the blog post, as well as the comment form.

// Create a comment-template that will hold an individual comment. Should have a footer for the commenter name.


// Provide a form with an id of post-form to create a blog post with a title, body, and author. Submitting the form should build the page template with the post inside. Make the form submit using a createPost() function.

// Provide a form within the comments-template to post comments, including commenter name and comment text. These should use the template to insert individual comments into the comments section. You should be able to keep adding more comments. Make the form submit use a postComment() function.
function createPost() {
  var pageTemplate = _.template(document.getElementById('page-template').innerHTML)
  var postTemplate = _.template(document.getElementById('post-template').innerHTML)
  var commentsTemplate = _.template(document.getElementById('comments-template'))
}

function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML)
}
