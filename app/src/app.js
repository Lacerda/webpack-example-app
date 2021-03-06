import '../style/index.css';
import cats from './cats.js';

const catsContainer = document.createElement('div');
const catsList = document.createElement('ul');

catsContainer.appendChild(catsList);

for (const cat of cats) {
  const li = document.createElement('li');
  const text = document.createTextNode(`${cat}`);
  li.appendChild(text);
  catsList.appendChild(li);
}

document.body.appendChild(catsContainer);
