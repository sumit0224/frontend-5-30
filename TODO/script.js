

// selection of all element in html
const main = document.querySelector(".main");
const input = document.querySelector("#input");
const addBtn = document.querySelector("#addBtn");
const todolist = document.querySelector(".todolist")
const deleteBtn = document.querySelector(".delete-btn")
const error = document.querySelector(".error")


// we use localstorage for get todo data nhi to blank array milga 

const todos = JSON.parse(localStorage.getItem("todos")) || [];

// show data on screen 
function render() {

    // agr todo ki length 0 hai to error ayaga 
    if (todos.length === 0) {
        todolist.innerHTML = `<p> No tasks found </p>`
    } else {

        // agr todo ki length 0 se badi to hm todolist ko blank krnge phle 
        todolist.innerHTML = ""
        // phir todo item ko foreach har item k liye yeh code likhga or item banyga 
        todos.forEach((item, index) => {
            let todo_item = document.createElement("div");
            todo_item.classList = "todo-item";
            todo_item.innerHTML = `
                
               <div>
               <span>${index + 1}.</span>
                <span id=${item.complete ? "complete" : " "}>${item.todo}</span>
               </div>


                 <div id="btn">
                 <button class="delete-btn" onclick="deleteTodo(${index})"  >X</button>
                 <button class="complete" onclick="complete(${index})" > ✔️</button>
                 </div>
            `
            todolist.append(todo_item)
        })
    }

}
//  todo ko localstorage m save kr rhe h 

function saveTodo() {
    localStorage.setItem("todos", JSON.stringify(todos))
}

// error show krne k liye
function showError(msg) {
    error.textContent = msg;

    setTimeout(() => {
        error.textContent = "";
    }, 2000);
}

// data add krne liye todo m 
function addTodo() {
    if (input.value.trim() === "") {
        showError("please enter first")
        return;
    }
    let data = {
        id: Date.now(),
        todo: input.value,
        complete: false
    }
    todos.unshift(data)
    input.value = ""
    saveTodo()
    render()

}

// item delete krne k liye
function deleteTodo(id) {
    todos.splice(id, 1);
    saveTodo()
    render()

}
render()

// status change krne k liye

const complete = (id) => {
    todos[id].complete = !todos[id].complete
    saveTodo()
    render()
}

// btn pr function lange k liye

addBtn.addEventListener("click", addTodo)




