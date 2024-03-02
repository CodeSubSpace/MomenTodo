const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const messages = ["Good Dawn", "Sunrise!", "Good Morning", "Good Afternoon", "Good Night"]

const clockTime = document.querySelector(".time");
const clockHello = document.querySelector(".clock__hello");
const yearMonth = document.querySelector(".year-month");
const dow = document.querySelector(".dow");
const dayText = document.querySelector(".clock__day");




function updateCurrentTime() {
    const now = new Date();

    const year = now.getFullYear();
    const month = months[now.getMonth()] 
    const day = now.getDate();
    const dayOfWeek = daysOfWeek[now.getDay()];
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    clockTime.innerText = `${hours}:${minutes}`;
    yearMonth.innerText = `${year}, ${month}, ${day}`;
    dow.innerText = `${dayOfWeek}`;
    
    if (0 < now.getHours() && now.getHours() <= 5) {
        dayText.innerText = messages[0];
    } else if (5 < now.getHours() && now.getHours() <= 6) {
        dayText.innerText = messages[1];
    } else if (6 < now.getHours() && now.getHours() <= 11) {
        dayText.innerText = messages[2];
    } else if (11 < now.getHours() && now.getHours() <= 18) {
        dayText.innerText = messages[3];
    } else {
        dayText.innerText = messages[4];   
    }
}

updateCurrentTime(); // 웹페이지 로드 시 바로 시간 업데이트 반영
setInterval(updateCurrentTime, 1000);
