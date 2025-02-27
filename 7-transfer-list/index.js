let leftSide = document.querySelectorAll("#left");
let rightSide = document.querySelectorAll("#right");
let center = document.querySelectorAll("#center");
let leftUlValue = leftSide[0].children[0];
let rightUlValue = rightSide[0].children[0];
let firstBtn = document.getElementById("first");
let secondBtn = document.getElementById("second");
let thirdBtn = document.getElementById("third");
let fourthBtn = document.getElementById("fourth");

let leftArr = Array.from(leftUlValue.children);

function rightAll() {
  firstBtn.addEventListener("click", () => {
    let rightArr = Array.from(rightUlValue.children);
    rightArr.forEach((ele) => {
      ele.children[0].checked = false;
      leftUlValue.appendChild(ele);
    });
  });
}

function rightCheckedOnly() {
  secondBtn.addEventListener("click", () => {
    let rightArr = Array.from(rightUlValue.children);
    rightArr.forEach((ele) => {
      if (ele.children[0].checked) {
        ele.children[0].checked = false;
        leftUlValue.appendChild(ele);
      }
    });
  });
}

function leftCheckOnly() {
  fourthBtn.addEventListener("click", () => {
    let leftArr = Array.from(leftUlValue.children);
    leftArr.forEach((ele) => {
      if (ele.children[0].checked) {
        ele.children[0].checked = false;
        rightUlValue.appendChild(ele);
      }
    });
  });
}

function leftAll() {
  thirdBtn.addEventListener("click", () => {
    let leftArr = Array.from(leftUlValue.children);
    leftArr.forEach((ele) => {
      ele.children[0].checked = false;
      rightUlValue.appendChild(ele);
    });
  });
}

rightAll();
rightCheckedOnly();
leftAll();
leftCheckOnly();
// console.log(leftSide[0].children[0].children[2]);
