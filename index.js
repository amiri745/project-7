let header = document.createElement("div");
header.innerText = "نظر";
header.style.backgroundColor = "#9B8CF0";
header.style.color = "white";
header.style.padding = "15px";
header.style.textAlign = "center";
header.style.borderRadius = "10px";
header.style.width = "80%";
header.style.margin = "20px auto";
document.body.appendChild(header);

let commentBox = document.createElement("div");
commentBox.innerHTML = "<h3>Good Job 👏</h3><p>Your project looks nice!</p>";
commentBox.style.backgroundColor = "#e6f4ea";
commentBox.style.padding = "15px";
commentBox.style.borderRadius = "10px";
commentBox.style.width = "80%";
commentBox.style.margin = "auto";
document.body.appendChild(commentBox);

let button = document.createElement("button");
button.innerText = "Click Me";
button.style.backgroundColor = "#9B8CF0";
button.style.color = "white";
button.style.padding = "10px 20px";
button.style.border = "none";
button.style.borderRadius = "8px";
button.style.cursor = "pointer";
button.style.display = "block";
button.style.margin = "20px auto";

button.addEventListener("mouseover", function () {
  button.style.backgroundColor = "#8778db";
});

button.addEventListener("mouseout", function () {
  button.style.backgroundColor = "#9B8CF0";
});

button.addEventListener("click", function () {
  alert("Button clicked 🚀");
});

document.body.appendChild(button);
