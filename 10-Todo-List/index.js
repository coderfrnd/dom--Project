let boxContainer = document.querySelector(".box");
let inputBox = document.getElementById("input");
let showList = document.getElementById("append");

let storeData = [];
inputBox.addEventListener("keydown", (event) => {
  let storeVal = {};
  if (event.keyCode == 13) {
    storeVal["todoData"] = event.target.value;
    storeVal["isChecked"] = false;
    storeData.push(storeVal);
    console.log(storeData);
    inputBox.value = "";
    checkEveryTime();
  }
});

function checkEveryTime() {
  showList.innerHTML = "";
  storeData.forEach((ele) => {
    let li = document.createElement("li");
    let inputTick = document.createElement("input");
    inputTick.type = "checkbox";
    let paragraphData = document.createElement("p");
    paragraphData.innerText = ele.todoData;
    let spanData = document.createElement("span");
    spanData.innerText = "X";
    li.append(inputTick, paragraphData, spanData);
    console.log(paragraphData);
    showList.appendChild(li);
  });
}
