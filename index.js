function createPost() {
    event.preventDefault();
    
    const post_template = document.getElementById("post-template").innerHTML;
    
    const title = document.getElementById("post-form-title").value;
    const body = document.getElementById("post-form-body").value;
    const author = document.getElementById("post-form-author").value;

    const post_template_fn = _.template(post_template);
    const post_html = post_template_fn({"title": title, "body": body, "author": author});
    
    const page_template = document.getElementById("page-template").innerHTML;
    const page_template_fn = _.template(page_template);
    const page_html = page_template_fn({"sidebar":"I'm a sidebar!","posts":post_html});
    
    document.getElementById("page").innerHTML += page_html;
}
function postComment(){
    const commments_template = document.getElementById("commments-template").innerHTML;    
    const comment_template = document.getElementById("comment-template").innerHTML;
   
    const body = document.getElementById('comment-body');
    const author = document.getElementById('comment-author');
    
    document.getElementById("comment-section").innerHTML += comments_html;
}