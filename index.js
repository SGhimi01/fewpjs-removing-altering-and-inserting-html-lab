// Write your code here!

document.querySelector("main#main").remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.style = "color:red"
newHeader.innerHTML = "YOUR-NAME is the champion";