let firstdiv = document.getElementById("first-div");
let child = firstdiv.children;
console.log(child);
let arr = Array.from(child);

console.log(child[0].style.backgroundColor);

arr.forEach((ele) => {
  //   let color = ele.style.backgroundColor;
  // let color = getComputedStyle(ele).backgroundColor;
  let body = document.querySelector("body");

  ele.addEventListener("click", (e) => {
    let color = getComputedStyle(ele).backgroundColor;
    body.style.backgroundColor = color;
  });
  //   console.log(ele);

  //   body.style.backgroundColor = color;
});
