// todo row를 화면상에서 제거하는 함수.
function removeTodo(event, todo) {
    const toDoRow = event.target.parentNode.parentNode;
    toDoRow.remove();

    const todos = JSON.parse(localStorage.getItem('todos'));
    const updatedTodos = todos.filter(item => item !== todo);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
}

// .todos에 todo-row를 append하는 함수
function appendToDo(todo) {
    const toDos = document.querySelector(".todos")
    const todoRow = document.createElement("div");
    todoRow.className = "todo-row"

        const h5 = document.createElement('h5');
        h5.innerText = todo

    todoRow.appendChild(h5)
        const div = document.createElement('div');
            const checkButton = document.createElement('button');
            checkButton.innerText = 'Done!'

        div.appendChild(checkButton)
    todoRow.appendChild(div);
    toDos.appendChild(todoRow);

    // local Storage에 저장
    const localToDos = JSON.parse(localStorage.getItem('todos') || '[]');
    localToDos.push(todo);
    localStorage.setItem('todos', JSON.stringify(localToDos));

    // Done button 누를 시 삭제
    checkButton.addEventListener("click",  function(event){removeTodo(event, todo)}) // 두 가지 인자를 사용하기 위해서 익명 함수를 사용
}

// 내부에서 appendTodo 호출함
function addToDo(event) {
    if (event.key === 'Enter') {
        const toDo = event.target.value
        event.target.value = ""

        if (toDo !== "") {
            appendToDo(toDo);
        }
    }
}

function makeTodoContainer(name) {
    const main = document.querySelector(".main");
    const todoContainer = document.createElement("div");
    todoContainer.className = "todo-container";
    

        const todoContainerHeader = document.createElement("div");
        todoContainerHeader.className = "todo-container__header";

            const h2 = document.createElement("h2");
            h2.innerText = `What is your main goal for today, ${name}.`;
            const input = document.createElement("input");
            input.className = "todo-input";

            todoContainerHeader.appendChild(h2);
            todoContainerHeader.appendChild(input);
        
        todoContainer.appendChild(todoContainerHeader);
        
        const toDos = document.createElement("div");
        toDos.className = 'todos'
        
        todoContainer.appendChild(toDos);
        
    main.appendChild(todoContainer);

    const clockHello = document.querySelector(".clock__hello");
    clockHello.innerText = `${name}!`;

    const toDoInput = document.querySelector(".todo-input");
    toDoInput.addEventListener("keyup", addToDo); // 한글의 입력 방식 처리 문제가 발생하여 keydown이 아닌 keyup을 이용
}

function inputName(event){
    if (event.key == 'Enter') {
        const nameInput = document.querySelector(".name-input");
        const nameValue = nameInput.value;
        localStorage.setItem('name', JSON.stringify({name: nameValue}))

        const helloDiv = event.target.parentNode;
        helloDiv.classList.add('none');
        
        makeTodoContainer(nameValue);
        nameInput.removeEventListener("keydown", inputName); // input이 2번 눌리는 현상을 막고자 eventListener를 1회용으로 제한함.  
    }
}


if (localStorage.getItem('name')) {
    // .hello display none 설정
    const helloDiv = document.querySelector(".hello");
    helloDiv.classList.add("none");
    
    const nameValue = JSON.parse(localStorage.getItem("name")).name;
    makeTodoContainer(nameValue);

} else {
    // 로컬 스토리지에 name 값이 없을 때
    const nameInput = document.querySelector(".name-input");
    nameInput.addEventListener("keydown", inputName);
}


if (localStorage.getItem('todos')){
    const toDoList = JSON.parse(localStorage.getItem('todos'));
    localStorage.removeItem('todos')
    toDoList.forEach(todo => appendToDo(todo));
}

