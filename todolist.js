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
create.addEventListener("click", function() {
    newbox.style.display = "none";
    let tasktitle = newtask.value.trim();
    let priority = prior.value;
    let progress = prog.value;
    let duedate = date.value;
    if (tasktitle === "") return; 
    let card = document.createElement("div");
    card.classList.add("container");
    card.innerHTML = `
        <h2 class="title">${tasktitle}</h2>
        <hr>
        <select class="progress">
            <option${progress === "Done" ? " selected" : ""}>Done</option>
            <option${progress === "In Progress" ? " selected" : ""}>In Progress</option>
            <option${progress === "Not Started" ? " selected" : ""}>Not Started</option>
        </select>
        <select class="priority">
            <option${priority === "Low" ? " selected" : ""}>Low</option>
            <option${priority === "Medium" ? " selected" : ""}>Medium</option>
            <option${priority === "High" ? " selected" : ""}>High</option>
        </select>
        <hr>
        <label>Due Date: ${duedate}</label>
        <hr>
        <button class="complete-btn">Completed</button>
        <button class="remove-btn">Remove</button>
    `;
    const completeBtn = card.querySelector(".complete-btn");
    completeBtn.addEventListener("click", function() {
        card.querySelector(".progress").value = "Done"; 
    });
    const removeBtn = card.querySelector(".remove-btn");
    removeBtn.addEventListener("click", function() {
        card.remove();
    });
    left.appendChild(card);
    newtask.value = "";     
    date.value = "";
});
