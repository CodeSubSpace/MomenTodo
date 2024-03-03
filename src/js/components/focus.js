const focusBtn = document.querySelector(".side-button:last-child");
// const parentGrid = document.querySelector(".focus-links")
// function countUp(event) {
//     const popUpDiv = event.target.parentNode;
//     const startStopButton = event.target; 
//     startStopButton.innerText = "Stop";

//     const div = document.createElement("div");
//     div.className = "count-up";

//     let seconds = 0;
//     let isRunning = true; 

//     const timeDisplay = document.createElement("span");
//     timeDisplay.innerText = "00:00:00";
//     div.appendChild(timeDisplay);

//     popUpDiv.append(div);

//     const intervalId = setInterval(() => {
//         if (isRunning) {
//             seconds++;
//             let hours = Math.floor(seconds / 3600);
//             let minutes = Math.floor((seconds % 3600) / 60);
//             let secs = seconds % 60;

//             let formattedTime = [
//                 hours.toString().padStart(2, '0'),
//                 minutes.toString().padStart(2, '0'),
//                 secs.toString().padStart(2, '0')
//             ].join(':');

//             timeDisplay.innerText = formattedTime;
//         }
//     }, 1000);

//     // 'Stop' 버튼 기능 구현
//     startStopButton.onclick = () => {
//         if (isRunning) {
//             isRunning = false;
//             startStopButton.innerText = "Start"; 
//             isRunning = true;
//             startStopButton.innerText = "Stop";
//         }
//     };

//     // '초기화' 버튼 생성 및 기능 구현
//     const resetButton = document.createElement("button");
//     resetButton.innerText = "Restart";
//     resetButton.className = "reset-button hover-brown";
//     popUpDiv.appendChild(resetButton);

//     resetButton.onclick = () => {
//         clearInterval(intervalId); // 타이머 중지
//         seconds = 0; // 초 초기화
//         timeDisplay.innerText = "00:00:00"; // 타이머 표시 초기화
//         startStopButton.innerText = "Let's Immersion!"; // 버튼 텍스트 초기화
//         startStopButton.onclick = countUp; // 버튼 클릭 이벤트를 countUp으로 재설정
//         resetButton.remove(); // '초기화' 버튼 제거
//     };
// }



// function popUpMaker() {
//     const div = document.createElement("div");
//     div.className = "focus-pop-up";
//     div.classList.add("absolute");

//         const popUpHeadr = document.createElement("header");
//         popUpHeadr.className = "focus-pop-up__header"
//         popUpHeadr.innerText = "How long can you immerse yourself?"

//         const focusInput = document.createElement("button");
//         focusInput.className = "foucs-button";
//         focusInput.classList.add("hover-brown")
//         focusInput.innerText= "Let's Immersion!"
//     div.appendChild(popUpHeadr);
//     div.appendChild(focusInput);

//     parentGrid.append(div)

//     focusInput.addEventListener("click", countUp)
// }

// function focusPopUp(event) {
//     popUpMaker()
// }
    

// focusBtn.addEventListener("click", focusPopUp);
// console.log(focusBtn)


function commingSoon(){
    alert("comming soon!")
}
focusBtn.addEventListener("click", commingSoon);
