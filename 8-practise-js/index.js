let post = document.querySelector(".post-container");

async function getData(start, end) {
  try {
    let response = await fetch(
      ` https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${end}`
    );
    let data = await response.json();
    data.forEach((element) => {
      let box = document.createElement("div");
      box.style.padding = "25px";
      box.style.margin = "25px";
      box.style.border = "2px solid black";
      box.textContent = element.body;
      post.appendChild(box);
    });
    console.log(data);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}
getData(0, 80);
console.log(window.innerHeight);
