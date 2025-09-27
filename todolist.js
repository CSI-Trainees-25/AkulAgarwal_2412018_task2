const newbox = document.getElementById("newtask");
const newtask = document.getElementById("addtask");
const prior = document.getElementById("priority");
const prog = document.getElementById("progress");
const date = document.getElementById("duedate");
document.getElementById("addbtn").addEventListener("click", function(){
    newbox.style.display="block";
})
const create = document.getElementById("create");
create.addEventListener("click", function(){
    newbox.style.display="none";
    const tasktitle = newtask.value.trim();
    const priority = prior.value;
    const progress = prog.value;
    const duedate = date.value;
})
