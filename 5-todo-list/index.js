let content = document.getElementsByClassName("content");
let final = document.getElementById("list");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let val = content[0].children;
  let div = document.createElement("div");
  let ul = document.createElement("ul");
  let firstli = document.createElement("li");
  let edit = document.createElement("button");
  let remove = document.createElement("button");
  ul.classList.add("flex", "justify-center");
  let textnode = val[0].value;
  firstli.innerText = textnode;
  let secondli = document.createElement("li");
  let thirdli = document.createElement("li");
  edit.setAttribute("id", "btns");
  edit.innerText = "EDIT";
  remove.innerText = "DELETE";
  secondli.appendChild(edit);
  thirdli.appendChild(remove);

  firstli.classList.add("m-4", "p-4");

  secondli.classList.add(
    "m-4",
    "p-4",
    "h-[60px]",
    "w-[80px]",
    "bg-[aqua]",
    "text-center",
    "border",
    "border-black",
    "rounded"
  );
  thirdli.classList.add(
    "m-4",
    "p-4",
    "h-[60px]",
    "w-[80px]",
    "bg-[aqua]",
    "text-center",
    "border",
    "border-black",
    "rounded"
  );
  ul.appendChild(firstli);
  ul.appendChild(secondli);
  ul.appendChild(thirdli);
  div.appendChild(ul);
  final.appendChild(div);
  console.log(ul.outerHTML);

  edit.addEventListener("click", () => {
    let ipbox = document.createElement("input");
    ipbox.type = "text";
    ipbox.classList.add("border", "border-black", "p-1");
    firstli.replaceWith(ipbox);
    ipbox.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        let newli = document.createElement("li");
        newli.classList.add("m-4", "p-4");
        newli.innerText = ipbox.value;
        ipbox.replaceWith(newli);
      }
    });
    ipbox.addEventListener("blur", () => {
      let newli = document.createElement("li");
      newli.classList.add("m-4", "p-4");
      newli.innerText = ipbox.value;
      ipbox.replaceWith(newli);
    });
  });
  remove.addEventListener("click", () => {
    div.remove();
  });
});
