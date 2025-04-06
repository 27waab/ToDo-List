const btnMood = document.getElementById("mood");
const taskInput = document.getElementById("addTask");
const taskBtn = document.getElementById("addBtn");
const taskSection = document.querySelector(".tasks ul");
let taskArr = [];

// Form Send Off
document.forms[0].onsubmit = (e) => {
    e.preventDefault();
};

// Change The Page To Dark Mood Or Light Mood
btnMood.onclick = () => {
    document.body.classList.toggle("changeMood");
}

// Make Items To Add in The Ul in the Page
const updateSection = () => {
    taskSection.innerHTML = "";
    taskArr.forEach((task, index) => {
        const li = document.createElement("li");
        const liText = document.createElement("p");
        const liBtn = document.createElement("button");
        liText.textContent = task;
        liBtn.textContent = "Delete";
        liBtn.dataset.index = index;
        li.appendChild(liText);
        li.appendChild(liBtn);
        taskSection.appendChild(li);
    });
}

// Function of Push The Task in Array
const updateArr = (text) => {
    const task = text.value.split(" ").filter(Boolean);
    if (task.length > 0) {
        let newTask = task.join(" ");
        taskArr.push(newTask);
    }
    taskInput.value = "";
    updateSection();
}

// Button On Click
taskBtn.addEventListener("click", () => updateArr(taskInput));
taskSection.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const index = event.target.dataset.index;
        taskArr.splice(index, 1);
        updateSection();
    }
});