const containerGrid = document.querySelector(".container");
const removeButton = document.querySelector(".remove");
const randomColor = document.querySelector(".random");
const normalColor = document.querySelector(".normalColor");
const gridButton = document.querySelector(".gridButton");


function changeColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function createRandomColor (){
    const gridDivs = document.querySelectorAll(".containerItem");
    gridDivs.forEach(div => {
        div.addEventListener('mouseover', () =>{
            div.classList.add("randomColor");
            div.style.background = changeColor();
        })
        
    })
}

function getOriginalColor(){
    const gridDivs = document.querySelectorAll(".containerItem");
    gridDivs.forEach(div => {
        div.addEventListener('mouseover', () =>{
            div.style.backgroundColor = "black";
        })
    })
}

function changeGrid(){
    const userChoice = prompt("How many squares do you want side by side?(from 2 to 99)");
    const size = parseInt(userChoice, 10);
    if(size > 99){
        alert("Please choose a number betweenn 2 and 99");
    }else{
        containerGrid.innerHTML = '';

    for (let i= 0; i < size*size; i++){
        const containerItem = document.createElement("div");
        containerItem.classList.add("containerItem");
        containerGrid.appendChild(containerItem);

        setTimeout(()=> {
            containerItem.classList.add("show");
        });
        
    }



    const gridDivs = document.querySelectorAll(".containerItem");
    gridDivs.forEach(div =>{
            div.style.width = `calc(100% / ${size})`;
            div.style.height = `calc(100% / ${size})`;
        })

    addHoverEffect();
    }
}

// These five lines of code create the grid

function addHoverEffect(){
    const gridDivs = document.querySelectorAll(".containerItem");
    gridDivs.forEach(div =>{
    div.addEventListener('mouseover', () =>{
        div.classList.add("hovered");
    })
});
}

function erase (){
    const gridDivs = document.querySelectorAll(".containerItem");
    gridDivs.forEach(div =>{
        div.classList.remove("hovered");
        div.style.backgroundColor = "";
    })
}
for (let i= 0; i < 1000; i++){
    const containerItem = document.createElement("div");
    containerItem.classList.add("containerItem");
    containerGrid.appendChild(containerItem);
}

addHoverEffect();
normalColor.addEventListener('click',getOriginalColor);
randomColor.addEventListener('click',createRandomColor);
removeButton.addEventListener('click', erase);
gridButton.addEventListener('click', changeGrid);


  