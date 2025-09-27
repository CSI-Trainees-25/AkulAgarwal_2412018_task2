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
    const tasktitle = newtask.value.trim();
    const priority = prior.value;
    const progress = prog.value;
    const duedate = date.value;
    left.innerHTML=`
    <div class="container">
        <h2 class="title">${tasktitle}</h2>
        <hr>
        <select id="progr">
            <option>Done</option>
            <option>In Progress</option>
            <option>Not Started</option>
        </select>
        <select id="priori">
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
