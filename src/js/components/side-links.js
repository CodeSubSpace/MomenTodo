// 사이드 링크 버튼 조작
const sideButtons = document.querySelectorAll(".side-button");

function mouseOverController (event){
    event.target.style.background = "#4B3F3A";
    event.target.style.color = "#FAF7E5";
}

function  mouseOutController(event) {
    event.target.style.background = "";
    event.target.style.color = "";
}

sideButtons.forEach(button => {
    button.addEventListener("mouseover", mouseOverController)
    button.addEventListener("mouseout", mouseOutController)}
)
