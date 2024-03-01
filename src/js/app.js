function makeTodoContainer(name) {
    const main = document.querySelector(".main");
    const todoContainer = document.createElement("div");
    todoContainer.className = "todo-container";
    

        const todoContainerHeader = document.createElement("div");
        todoContainerHeader.className = "todo-container__header";

            const h2 = document.createElement("h2");
            h2.innerText = `What is your main goal for today, ${name}?`;
            const input = document.createElement("input");
            input.className = "todo-input";

            todoContainerHeader.appendChild(h2);
            todoContainerHeader.appendChild(input);
        
        todoContainer.appendChild(todoContainerHeader);
    main.appendChild(todoContainer);

    const clockHello = document.querySelector(".clock__hello");
    clockHello.innerText = `Good Day, ${name}`;
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
    nameInput.addEventListener("keydown", inputName)
}