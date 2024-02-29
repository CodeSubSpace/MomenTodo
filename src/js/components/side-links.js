const sideLinks = document.querySelector(".side-button:first-child");
const sideFocus = document.querySelector(".side-button:last-child");
const links = document.querySelector(".links");
const link = document.querySelector(".link");

// input 누르고 엔터 시 리스트 추가
function addLink(event){
    if (event.key === "Enter"){
        const url = event.target.value;
        // const favicon = url + "/favicon.ico"

        const newDiv = document.createElement("div");
        newDiv.className = "link";
        newDiv.classList.add("hover");
        
        // 파비콘 element 생성
        newImg = document.createElement("img");
        newImg.src = "#";
        newImg.className = "fav-icon";
        newImg.classList.add("hover-parent");

        // 사이트 이름 생성 
        newSpan = document.createElement("span");
        newSpan.innerText = url;
        newSpan.className = "site";
        newSpan.classList.add("hover-parent");
    
        newDiv.appendChild(newImg);
        newDiv.appendChild(newSpan);
        newDiv.classList.add("hover-brown");
        links.appendChild(newDiv);

        event.target.remove();
    }
}

// Link button 누를 시 input 창 등장
function addlinkController(event){
    const newDiv = document.createElement("div");
    newDiv.className = "new-link-container";
    const newInputLink = document.createElement("input");
    newInputLink.className = "new-input-link";
    newInputLink.placeholder = "write url"

    newDiv.appendChild(newInputLink);
    
    if (links.firstChild) {
        links.insertBefore(newDiv, links.firstChild)
    } else{
        links.appendChild(newDiv);
    }

    const newLink = document.querySelector(".new-link-container");
   
    newLink.addEventListener("keydown", addLink)
}

sideLinks.addEventListener("click", addlinkController);


// link hover 시 edit page 등장

// link edit rename

// link edit remove