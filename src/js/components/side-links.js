const focusLink = document.querySelector(".focus-links")
const sideLinks = document.querySelector(".side-button:first-child");
const sideFocus = document.querySelector(".side-button:last-child");
const links = document.querySelector(".links");
const link = document.querySelector(".link");

// input 누르고 엔터 시 리스트 추가
function addLink(event){
    if (event.key === "Enter"){
        const url = event.target.value;
        // const favicon = url + "/favicon.ico"

        const newDiv = document.createElement("a");
        newDiv.className = "link";
        newDiv.classList.add("hover-brown");

        const divCol1 = document.createElement("div");
        divCol1.className = "link__column"

        
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

        divCol1.appendChild(newImg);
        divCol1.appendChild(newSpan);

        const divCol2 = document.createElement("div");
        divCol2.className = "link__column";

        const ellipsisVertical = document.createElement("i");
        ellipsisVertical.className = "fa-solid";
        ellipsisVertical.classList.add("fa-ellipsis-vertical");

        divCol2.appendChild(ellipsisVertical);
        
        newDiv.classList.add("hover-brown");
        newDiv.appendChild(divCol1);
        newDiv.appendChild(divCol2);

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
function removeLinkDiv(originLink){
    originLink.remove();
}

function removeEdit(event){
    event.target.parentNode.parentNode.remove(); // 2단위 위 부모 요소 삭제
}


function reviseLinks(event, originLink){
    
    const name = originLink.querySelector(".site");
    // 엔터키 입력 시 링크 이름 수정
    if (event.key === "Enter"){
        const newName = event.target.value;
        name.innerText = newName;
        event.target.parentNode.parentNode.remove();
    }
}

function popUpEdit(event){
    const originLink = event.target.parentNode.parentNode;
    const popUp = document.createElement("div");
    popUp.className = "pop-up";
    popUp.classList.add("fade-in");
    
    const popUpTop = document.createElement("div");
    const popUpTopButton = document.createElement("button");
    popUpTopButton .className = "pop-up__header";
    popUpTopButton .classList.add("hover-mondrain-black")
    popUpTopButton .innerText = "X";
    popUpTop.appendChild(popUpTopButton)

    const PopUpMain = document.createElement("div");
    const removeLink = document.createElement("button");
    removeLink.innerText = "Remove";
    removeLink.className = "hover-mondrain-black";
    const reviseLink = document.createElement("input");
    reviseLink.placeholder = "Revise";
    
    reviseLink.className = "input-default";
    reviseLink.classList.add("revise-link")
    PopUpMain.appendChild(removeLink);
    PopUpMain.appendChild(reviseLink);
    
    popUp.appendChild(popUpTop);
    popUp.appendChild(PopUpMain);

    links.appendChild(popUp);
    popUp.offsetWidth = focusLink.offsetWidth;

    popUpTopButton.addEventListener("click", removeEdit)
    removeLink.addEventListener("click", () => removeLinkDiv(originLink))
    removeLink.addEventListener("click", removeEdit)
    reviseLink.addEventListener("keydown", (event) => reviseLinks(event, originLink))
}


function hoverController(event) {
    
    const ellipsises = document.querySelectorAll(".fa-ellipsis-vertical");
    
    ellipsises.forEach(icon => {
        icon.addEventListener("click", function(event) {
            event.preventDefault()
            event.stopPropagation();
            if(!document.querySelector(".pop-up")){
                popUpEdit(event);
            }
        });
    })
}

link.addEventListener("mouseover", hoverController);