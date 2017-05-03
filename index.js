function createPost() {
  const title  = document.getElementById('post-title').value;
  const body   = document.getElementById('post-body').value;
  const author = document.getElementById('post-author').value;

  const postTmp = document.getElementById('post-template').innerHTML;
  const postBld = _.template(postTmp);
  const post    = postBld({
    title:  title,
    body:   body,
    author: author
  });

  const commentsTmp = document.getElementById('comments-template').innerHTML;
  const commentsBld = _.template(commentsTmp);
  const comments    = commentsBld();

  const pageTmp = document.getElementById('page-template').innerHTML;
  const pageBld = _.template(pageTmp);
  const page    = pageBld({
    post:     post,
    comments: comments
  });

  document.querySelector('main').innerHTML += page;
}

function postComment() {
  const text   = document.getElementById('comment-text').value;
  const author = document.getElementById('comment-author').value;

  const commentTmp = document.getElementById('comment-template').innerHTML;
  const commentBld = _.template(commentTmp);
  const comment    = commentBld({
    text:   text,
    author: author
  });

  document.getElementById('comments').innerHTML += comment;
}




// document.addEventListener('load', () => {
//
// });
