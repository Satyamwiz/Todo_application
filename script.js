let todos = [];
render();


function adding(e) {
  if(document.querySelector("input").value===""){
    alert("Enter a task");
  }
  else {
  todos.push({
    title: document.querySelector("input").value
  })
  render();
  console.log(todos);
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  render();
}

function render() {

  let html = document.getElementById("todoso");
  html.innerHTML="";
  let variable=3;
  if(todos.length==0){
    html.innerHTML="<div>added task will be visible here</div>";
  }
  todos.forEach((task, index) => {
      variable=index+1;
      html.innerHTML += "<div> <span>"+ variable + ". </span>  <span> " + task.title + "</span> <button onclick='deleteTodo(" + index + ")'> delete </button> </div>"
  }
  );


}
