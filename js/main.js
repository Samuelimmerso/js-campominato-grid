// Declaration
const play = document.querySelector("#gridgen");                         //button click to create the grid
const container_bottom = document.querySelector(".container_bottom");       //bottom part of container
let squareEl = document.querySelector(".square");
let gridGenerated = false;



//button click generate the grid or reset it
play.addEventListener("click",
    function () {
        if (!gridGenerated) {  //if the grid there aren't 
            container_bottom.classList.remove("d-none");
            gridGenerated = true;
            generateGrid();                           // generate it
        } else {                                            //else return
            return;
        }
    }
);


squareEl.addEventListener("click",
    function () {
        console.log(squareEl.classList);
    }
);














/*****************************
 *                           *
 *          FUNCTION         *
 *                           *
 *****************************/


function generateGrid() {
    const gridEl = document.querySelector(".grid");  //grid element
    for (let i = 0; i < 100; i++) {
        gridEl.innerHTML += `<div class="square">${i + 1}</div>`;
    }
}

function resetGrid() {
    const gridEl = document.querySelector(".grid");  //grid element
    gridEl.innerHTML = ``;
}

