let num = document.getElementById("num");
let plus = document.getElementById("plus");
let minus = document.getElementById("negative");
let zero = document.getElementById("zero");
let reset = document.getElementById("btn");
let x = num.value;
x = parseInt(x);

function counter() {
  plus.addEventListener("click", () => {
    let inputNum = parseInt(num.value);
    let final = (zero.innerText = parseInt(zero.innerText) + inputNum);
  });
  minus.addEventListener("click", () => {
    let inputNum = parseInt(num.value);
    let final = (zero.innerText = parseInt(zero.innerText) - inputNum);
  });
  reset.addEventListener("click", () => {
    zero.innerText = 0;
  });
}

counter();
