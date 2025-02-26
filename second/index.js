// let iptext = document.querySelector("input[type='text']");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let value = document.querySelector(".value");
let btn = document.getElementById("btn");

// console.log(iptext.value);

function calculateBMI() {
  let bmiVal = 0;
  let height = document.getElementById("height");
  let weight = document.getElementById("weight");
  let numHeight = height.value;
  let numWeight = weight.value;
  if (numHeight.trim() === "" || numWeight.trim() === "") {
    alert("Put a Valid Value");
    return "0";
  }
  numHeight = parseInt(numHeight);
  numWeight = parseInt(numWeight);
  numHeight = numHeight / 100;
  numHeight = numHeight * numHeight;
  let bmi = numWeight / numHeight;
  // console.log(bmi);
  // bmi = Math.round(bmi);

  bmiVal = bmi.toFixed(2);

  return bmiVal;
}

function createElement() {
  let div = document.createElement("div");
  let textDiv = document.createElement("div");
  let textNode = document.createTextNode("Your BMI index is ");
  div.setAttribute("id", "bmi");
  div.style.height = "80px";
  div.style.width = "160px";
  div.style.display = "flex";
  div.style.alignItems = "start";
  div.style.fontSize = "40px";
  div.style.justifyContent = "center";
  div.style.backgroundColor = "aqua";
  textDiv.style.height = "40px";
  textDiv.style.width = "350px";
  textDiv.style.fontSize = "40px";
  textDiv.style.textAlign = "center";

  textDiv.appendChild(textNode);
  value.appendChild(textDiv);
  btn.addEventListener("click", () => {
    let bmi = calculateBMI();
    div.innerText = bmi;
    value.appendChild(div);
  });
}
createElement();
