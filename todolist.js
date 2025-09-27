const newbox = document.getElementById("newtask");
const newtask = document.getElementById("addtask");
const prior = document.getElementById("priority");
const prog = document.getElementById("progress");
const date = document.getElementById("duedate");
const left = document.getElementById("left");
document.getElementById("addbtn").addEventListener("click", function(){
    newbox.style.display="block";
})
const create = document.getElementById("create");
create.addEventListener("click", function(){
    newbox.style.display="none";
    let tasktitle = newtask.value.trim();
    let priority = prior.value;
    let progress = prog.value;
    let duedate = date.value;
    left.innerHTML=`
    <div class="container">
        <h2 class="title">${tasktitle}</h2>
        <hr>
        <select id="progress">
            <option>Done</option>
            <option>In Progress</option>
            <option>Not Started</option>
        </select>
        <select id="priority">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
        </select>
        <hr>
        <label>Due Date: ${duedate}</label>
    </div>
    `;
    document.getElementById("priori").value=priority;
    document.getElementById("progr").value=progress;
})
