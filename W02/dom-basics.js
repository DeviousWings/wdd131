const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

// Step 2
const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "A random placeholder");
document.body.appendChild(newImage);

//Step 3
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

// Step 4
const newSec = document.createElement("section");

const secH2 = document.createElement("h2");
secH2.innerText = "DOM Basics";

const secP = document.createElement("p");
secP.innerText = "This was added through Javascript2";

newSec.appendChild(secH2);
newSec.appendChild(secP);

document.body.appendChild(newSec);
