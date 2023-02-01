// Declaration
const generate = document.querySelector("#gridgen");                         //button click to create the grid
const container_bottom = document.querySelector(".container_bottom");       //bottom part of container
const squareEl = document.querySelector(".square");



//button click generate the grid or reset it
generate.addEventListener("click",
    function () {
        container_bottom.classList.toggle("d-none");    //seek or see the grid

        if (!container_bottom.classList.contains("d-none")) {  //if the grid there aren't 
            generateGrid();                           // generate it
            squareEl = document.querySelector(".square");
        } else {                                            //else reset and seek it
            resetGrid();
        }
    }
);


//grid/squares interaction 
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
        gridEl.innerHTML += `<div class="square"></div>`;
    }
}

function resetGrid() {
    const gridEl = document.querySelector(".grid");  //grid element
    gridEl.innerHTML = ``;
}

