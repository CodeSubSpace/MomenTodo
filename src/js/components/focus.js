const focusBtn = document.querySelector(".side-button:last-child");
const parentGrid = document.querySelector(".focus-links")

let intervalId = null; 
let totalTime = 0; // 총 경과 시간을 초 단위로 추적

function formatTime(totalSeconds) {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    // 시간을 "HH:MM:SS" 형식의 문자열로 포매팅
    return [hours, minutes, seconds].map(val => val.toString().padStart(2, '0')).join(':');
}

function countUp() {
    totalTime += 1; // 총 경과 시간을 1초 증가
    const countNumber = document.querySelector(".count-main__header");
    countNumber.innerText = formatTime(totalTime); // 화면에 업데이트된 시간 표시
}

function countUpReset(event) {
    totalTime = 0; // 총 경과 시간을 0으로 리셋
    const countNumber = document.querySelector(".count-main__header");
    countNumber.innerText = "00:00:00"; // 화면에 초기 시간 표시
}

function countUpStartStop(event) {
    const startOrStopBtn = event.target;

    if (startOrStopBtn.innerText === "start") {
        startOrStopBtn.innerText = "stop";
        if (!intervalId) {
            intervalId = setInterval(countUp, 1000); // 1초마다 countUp 함수를 반복 실행
        }
    } else if (startOrStopBtn.innerText === "stop"){
        startOrStopBtn.innerText = "start";
        clearInterval(intervalId); // 반복 실행 중지
        intervalId = null; // intervalId 초기화
    } else {
        alert("something is wrong...");
    }
}


function createCountUpDiv(event) {
    totalTime = 0; // "Let's Immersion" 버튼을 누를 때 totalTime을 0으로 재설정

    // 나머지 코드는 동일하게 유지
    const parentDiv = event.target.parentNode;
    event.target.remove();

    const div = document.createElement("div");
    div.className = "count-main";
    div.classList.add("fade-in"); // 오타 수정: "faid-in" -> "fade-in"
    const countTime = document.createElement("span");
    countTime.className = "count-main__header";
    countTime.innerText = "00:00:00";
    div.appendChild(countTime);

    const footer = document.createElement("footer");
    footer.className = "count-main__footer";
    const resetBtn = document.createElement("button");
    resetBtn.innerText = "reset";
    resetBtn.className = 'hover-brown';
    const stopBtn = document.createElement("button");
    stopBtn.innerText = "start";
    stopBtn.className = 'hover-brown';
    footer.appendChild(resetBtn);
    footer.appendChild(stopBtn);
    div.appendChild(footer);
    parentDiv.appendChild(div);

    stopBtn.addEventListener("click", countUpStartStop);
    resetBtn.addEventListener("click", countUpReset);
}



function popUpCloser(event) {
    event.target.parentNode.remove()
}


function popUpMaker() {
    const div = document.createElement("div");
    div.className = "focus-pop-up";
    div.classList.add("absolute");
        const closeBtn = document.createElement("button");
        closeBtn.className = "focus-pop-up-btn"
        closeBtn.classList.add("absolute")
        closeBtn.innerText = 'X'

        const popUpHeadr = document.createElement("header");
        popUpHeadr.className = "focus-pop-up__header"
        popUpHeadr.innerText = "How long can you immerse yourself?"

        const focusInput = document.createElement("button");
        focusInput.className = "foucs-button";
        focusInput.classList.add("hover-brown")
        focusInput.innerText= "Let's Immersion!"
    div.appendChild(closeBtn);
    div.appendChild(popUpHeadr);
    div.appendChild(focusInput);

    parentGrid.append(div)

    focusInput.addEventListener("click", createCountUpDiv)
    closeBtn.addEventListener("click", popUpCloser)
}

function focusPopUp(event) {
    event.preventDefault()
    popUpMaker()
}
    

focusBtn.addEventListener("click", focusPopUp);
console.log(focusBtn)