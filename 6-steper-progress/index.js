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
let next = document.getElementById("next");
let back = document.getElementById("back");
function increaseProgress(next) {
  next.addEventListener("click", () => {
    if (parseInt(value) <= 70) {
      value = parseInt(value) + parseInt(width);
      value = value + "%";
      colorBar.style.width = value;
      arr[counter].innerHTML = "&#10003";
      arr[counter].style.backgroundColor = "green";
      if (counter < 3) {
        arr[counter + 1].style.backgroundColor = "blue";
        message.textContent = msgArr[counter + 1];
      }

      counter++;
    } else {
      if (counter == 3) {
        arr[counter].innerHTML = "&#10003";
        arr[counter].style.backgroundColor = "green";
        counter++;
        console.log(value);
      }
    }
  });
}

function decrease(back) {
  back.addEventListener("click", () => {
    if (parseInt(value) >= 34) {
      console.log(value);

      colorBar.style.width = value;
      arr[counter - 1].textContent = counter;
      arr[counter - 1].style.backgroundColor = "blue";
      if (counter <= 3) {
        arr[counter].style.backgroundColor = "grey";
        message.textContent = msgArr[counter - 1];
      }
      counter--;
      value = parseInt(value) - parseInt(width);
      value = value + "%";
    } else if (counter == 1) {
      colorBar.style.width = value;
      arr[counter].style.backgroundColor = "grey";
      console.log(value);
      arr[counter - 1].textContent = counter;
      arr[counter - 1].style.backgroundColor = "blue";
      message.textContent = msgArr[counter - 1];
      counter--;
    } else {
      arr[counter].style.backgroundColor = "grey";
    }
  });
}
increaseProgress(next);
decrease(back);

// &#10003;
