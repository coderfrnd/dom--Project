let date = new Date();
console.log(date);

let timeDiv = document.getElementById("time");

let btn = document.getElementById("btn");

let check = true;

btn.addEventListener("click", () => {
  timeDiv.innerText = date;
  if (check) {
    check = false;
    setInterval(() => {
      date = new Date();
      timeDiv.innerText = date;
    }, 1000);
  }
});
