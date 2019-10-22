// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const paragraph = document.createElement('p');
paragraph.classList.add('redP');
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = 'red';

const heading3 = document.createElement('h3');
heading3.classList.add('blueH3');
heading3.textContent = "I'm a blue h3!";
heading3.style.color = 'blue';

const blackPink = document.createElement('div');
blackPink.style.borderColor = 'black';
blackPink.style.backgroundColor = 'pink';
const h1InsideDiv = document.createElement('h1');
h1InsideDiv.textContent = "I'm in a div";
const pInsideDiv = document.createElement('p');
pInsideDiv.textContent = "ME TOO";

blackPink.appendChild(h1InsideDiv);
blackPink.appendChild(pInsideDiv);

container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(heading3);
container.appendChild(blackPink);

btn.addEventListener('click', function(e){
    e.target.style.background = 'blue';
  })