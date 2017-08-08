function createPost()
{

  var title=document.getElementById('title').value;

  var body=document.getElementById('body').value;
  var auth=document.getElementById('auth').value;

  var ptemplate=document.getElementById('post-template').innerHTML;

  var templateFn = _.template(ptemplate);

  var ctemplate=document.getElementById('comments-template').innerHTML;

  var ctmp= _.template(ctemplate);

  var pgtemplate=document.getElementById('page-template').innerHTML;

  var tmp=_.template(pgtemplate);


  var templateHTML = templateFn({ 'title': title, 'body': body, 'auth' : auth });

  //append rather than replace!
  var main=document.getElementsByTagName('main');
  main[0].innerHTML += tmp();


  var pDiv=document.getElementById('post');
  pDiv.innerHTML=templateHTML;
  var tt=document.getElementById('cmt');
  tt.innerHTML=ctmp();



}

function postComment()
{
    //debugger;
    //var cstemplate=document.getElementById('comments-template').innerHTML;

    //var tmp=_.template("cstemplate");

    //var main=document.getElementsByTagName('main');
    var pDiv=document.getElementById('comments');

    var comment=document.getElementById('comment').value;
    var commenter=document.getElementById('commenter').value;

    var ctemplate=document.getElementById('comment-template').innerHTML;
    var templateFn=_.template(ctemplate);

    var templateHTML= templateFn({'comment' : comment, 'commenter':commenter});
    pDiv.innerHTML+=templateHTML;

  }
