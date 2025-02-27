let leftContainer = document.querySelector("#left");
let rightContainer = document.querySelector("#right");
let buttonContainer = document.querySelectorAll("#center");
let leftList = leftContainer.children[0];
let rightList = rightContainer.children[0];
let moveAllToLeftBtn = document.getElementById("first");
let moveSelectedToLeftBtn = document.getElementById("second");
let moveAllToRightBtn = document.getElementById("third");
let moveSelectedToRightBtn = document.getElementById("fourth");
let parentContainer = document.getElementById("main");

moveAllToLeftBtn.addEventListener("click", moveAllToLeft);
moveSelectedToLeftBtn.addEventListener("click", moveSelectedToLeft);
moveAllToRightBtn.addEventListener("click", moveAllToRight);
moveSelectedToRightBtn.addEventListener("click", moveSelectedToRight);

parentContainer.addEventListener("click", () => {
  let checkedLeft = leftContainer.querySelector("input:checked");
  let checkedRight = rightContainer.querySelector("input:checked");
  if (checkedLeft) {
    moveSelectedToRightBtn.disabled = false;
  }
  if (checkedRight) {
    moveSelectedToLeftBtn.disabled = false;
  }
});

function moveSelectedToRight() {
  let leftItems = Array.from(leftList.children);
  leftItems.forEach((item) => {
    if (item.children[0].checked) {
      item.children[0].checked = false;
      rightList.appendChild(item);
    }
  });
}
function moveAllToLeft() {
  let rightItems = Array.from(rightList.children);
  rightItems.forEach((item) => {
    item.children[0].checked = false;
    leftList.appendChild(item);
  });
}
function moveSelectedToLeft() {
  let rightItems = Array.from(rightList.children);
  rightItems.forEach((item) => {
    if (item.children[0].checked) {
      item.children[0].checked = false;
      leftList.appendChild(item);
    }
  });
}
function moveAllToRight() {
  let leftItems = Array.from(leftList.children);
  leftItems.forEach((item) => {
    item.children[0].checked = false;
    rightList.appendChild(item);
  });
}
