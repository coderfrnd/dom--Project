let leftContainer = document.querySelectorAll("#left");
let rightContainer = document.querySelectorAll("#right");
let buttonContainer = document.querySelectorAll("#center");
let leftList = leftContainer[0].children[0];
let rightList = rightContainer[0].children[0];
let moveAllToLeftBtn = document.getElementById("first");
let moveSelectedToLeftBtn = document.getElementById("second");
let moveAllToRightBtn = document.getElementById("third");
let moveSelectedToRightBtn = document.getElementById("fourth");

let leftItems = Array.from(leftList.children);

function moveAllToLeft() {
  moveAllToLeftBtn.addEventListener("click", () => {
    let rightItems = Array.from(rightList.children);
    rightItems.forEach((item) => {
      item.children[0].checked = false;
      leftList.appendChild(item);
    });
  });
}

function moveSelectedToLeft() {
  moveSelectedToLeftBtn.addEventListener("click", () => {
    let rightItems = Array.from(rightList.children);
    rightItems.forEach((item) => {
      if (item.children[0].checked) {
        item.children[0].checked = false;
        leftList.appendChild(item);
      }
    });
  });
}

function moveSelectedToRight() {
  moveSelectedToRightBtn.addEventListener("click", () => {
    let leftItems = Array.from(leftList.children);
    leftItems.forEach((item) => {
      if (item.children[0].checked) {
        item.children[0].checked = false;
        rightList.appendChild(item);
      }
    });
  });
}

function moveAllToRight() {
  moveAllToRightBtn.addEventListener("click", () => {
    let leftItems = Array.from(leftList.children);
    leftItems.forEach((item) => {
      item.children[0].checked = false;
      rightList.appendChild(item);
    });
  });
}

moveAllToLeft();
moveSelectedToLeft();
moveAllToRight();
moveSelectedToRight();
