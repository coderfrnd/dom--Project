let bar = document.getElementById("bar");
let colorBar = document.getElementById("color-bar");
let arr = document.querySelectorAll(".num");
let message = document.getElementById("message");
let msgArr = [
  "Your Contact Details",
  "Your Shipping Address",
  "Your  Payment method",
  "Your Product Delivered",
];
arr = Array.from(arr);
colorBar.style.backgroundColor = "red";
let width = "34%";
let value = 0;
let counter = 0;
let nextBtn = document.getElementById("next");
let backBtn = document.getElementById("back");

nextBtn.addEventListener("click", () => {
  if (arr[counter - 1]) {
    arr[counter - 1].style.backgroundColor = "Green";
  }
  if (arr[counter]) {
    arr[counter].style.backgroundColor = "blue";
    message.textContent = msgArr[counter];
    counter++;
  }
  if (parseInt(value) <= 102) {
    colorBar.style.width = value;
    value = parseInt(value) + parseInt(width);
    value = value + "%";
    console.log(value);
  }

  if (counter >= 4) {
    nextBtn.disabled = true;
  }
  if (counter > 0) {
    backBtn.disabled = false;
  }
});

backBtn.addEventListener("click", () => {
  if (arr[counter]) {
    console.log(value);
    arr[counter].style.backgroundColor = "grey";
  }
  if (arr[counter - 1]) {
    arr[counter - 1].style.backgroundColor = "blue";
    message.textContent = msgArr[counter - 1];
    counter--;
  }
  if (parseInt(value) > 0) {
    value = parseInt(value) - parseInt(width);
    value = value + "%";
    colorBar.style.width = value;
  }
  if (counter <= 3) {
    nextBtn.disabled = false;
  }

  if (counter == 0) {
    backBtn.disabled = true;
  }
});
