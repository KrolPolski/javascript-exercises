const container = document.querySelector("#container");
const p = document.createElement('p');
p.textContent = "Hey I'm red!";
p.style.color = "red";
container.appendChild(p);

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3 woo";
h3.style.color = "blue";
container.appendChild(h3);

const blackPinkDiv = document.createElement('div');
blackPinkDiv.style.backgroundColor = "pink";
blackPinkDiv.style.borderWidth = "3px";
blackPinkDiv.style.borderStyle = "solid";
blackPinkDiv.style.borderColor = "black";


const h1 = document.createElement('h1');
h1.textContent = "I'm in a div!";
blackPinkDiv.appendChild(h1);

const pDiv = document.createElement('p');
pDiv.textContent = "ME TOO!";
blackPinkDiv.appendChild(pDiv);
container.appendChild(blackPinkDiv);