const masterContainer = document.querySelector(".masterpiece-container");

const imgs = [
    "01.png",
    "02.png",
    "03.png",
    "04.png",
    "05.png",
    "06.png",
    "07.png",
    "08.png",
]

const randomImg = imgs[Math.floor(Math.random(0, 1) * imgs.length)];

const newImg = document.createElement("img")
newImg.src = "./src/img/" + randomImg
masterContainer.appendChild(newImg)
