class Model {
  constructor(props) {
    this.props = props;
  }

  toObject() {
    return this.props;
  }
}

class View {
  constructor(props) {
    this.compiled =  _.template(props.template)
  }

  render(object) {
    return this.compiled(object)
  }
}

function createPost() {
  let pageView = new View({
    template: document.getElementById('page-template').innerHTML
  })

  let postView = new View({
    template: document.getElementById('post-template').innerHTML
  })

  let commentForm = new View({
    template: document.getElementById('comments-template').innerHTML
  })

  let post = buildPost();
  let main = document.querySelector('main');
  let postHTML = postView.render(post.toObject());
  let commentFormHTML = commentForm.render({});

  main.innerHTML += pageView.render({ post: postHTML, commentForm: commentFormHTML })
}

function buildPost() {
  return(
    new Model({
      author: document.getElementById('postAuthor').value,
      title: document.getElementById('postTitle').value,
      content: document.getElementById('postContent').value
    })
  )
}

function buildComment() {
  return(
    new Model({
      comment: document.getElementById('commentText').value,
      commenter: document.getElementById('commenterName').value
    })
  )
}

function postComment() {
  let commentView = new View({
    template: document.getElementById('comment-template').innerHTML
  })
  let comment = buildComment()
  let commentsDiv = document.getElementById('comments')

  commentsDiv.innerHTML += commentView.render(comment.toObject())
}
