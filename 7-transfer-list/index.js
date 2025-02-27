let leftSide = document.querySelectorAll("#left");
let rightSide = document.querySelectorAll("#right");
let center = document.getElementById("center");
let leftUlValue = leftSide[0].children[0];
let rightUlValue = rightSide[0].children[0];
let firstBtn = document.getElementById("first");
// console.log(ulValue);

function rightAll() {
  firstBtn.addEventListener("click", () => {
    rightUlValue.appendChild(leftUlValue);
  });
}

rightAll();
// console.log(leftSide[0].children[0].children[2]);
