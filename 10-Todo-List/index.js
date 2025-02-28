let container = document.querySelector(".container");
let inputBox = document.getElementById("input");
let showList = document.getElementById("append");

let storeData = [];

container.addEventListener("click", (event) => {
  if (event.target.tagName == "SPAN") {
    let idDelete = event.target.parentNode;
    storeData = storeData.filter((ele) => {
      return ele.id != idDelete.id;
    });
    checkEveryTime();
  }

  if (event.target.tagName === "INPUT" && event.target.type === "checkbox") {
    let checkBox = event.target;
    let checkBoxParent = event.target.parentNode;
    if (checkBox.checked) {
      let index = storeData.findIndex((item) => item.id == checkBoxParent.id);
      console.log(index);
      if (index !== -1) {
        storeData[index].isChecked = true;
        checkEveryTime();
        console.log("yess");
      }
    } else {
      let index = storeData.findIndex((item) => item.id == checkBoxParent.id);
      if (index !== -1) {
        storeData[index].isChecked = false;
        checkEveryTime();
        console.log("yess");
      }
    }
  }
});

inputBox.addEventListener("keydown", (event) => {
  storeDataInArray(event);
});

function checkEveryTime() {
  showList.innerHTML = "";
  storeData.forEach((ele) => {
    let li = document.createElement("li");
    let inputTick = document.createElement("input");
    inputTick.type = "checkbox";
    inputTick.checked = ele.isChecked;
    let paragraphData = document.createElement("p");
    paragraphData.innerText = ele.todoData;
    if (ele.isChecked) {
      paragraphData.style.textDecoration = "line-through";
    }
    let spanData = document.createElement("span");
    spanData.innerText = "X";
    li.setAttribute("id", ele.id);
    li.append(inputTick, paragraphData, spanData);
    // console.log(paragraphData);
    showList.appendChild(li);
  });
}

function storeDataInArray(event) {
  let storeVal = {};
  if (event.key == "Enter") {
    storeVal["todoData"] = event.target.value;
    storeVal["isChecked"] = false;
    storeVal["id"] = storeData.length;
    storeData.push(storeVal);
    // console.log(storeData);
    inputBox.value = "";
    checkEveryTime();
  }
}
