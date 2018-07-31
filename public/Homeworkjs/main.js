const url = 'https://us-central1-omg-codemygear.cloudfunctions.net/comments/jay';

getComments();

var content = document.querySelector("#content");
var text = document.querySelector("#text");
async function getComments(){
  var resp = await fetch(url);
  var comments = await resp.json();
  var html = "";
  comments.forEach(function(comment){
    html = html + `<li>${comment.message}, by: ${comment.email}</li>`
  })
  content.innerHTML = html
}
var submit = document.querySelector("#submit");
submit.addEventListener('click', function() {
  postComments([{"comment": text.value}]);
});

async function postComments(comment) {
  var resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  });
  getComments();
}
