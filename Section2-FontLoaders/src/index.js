import style from './index.css';
import './clearButton';
import _ from 'lodash';
import logo from './assets/webpack_logo.png';
// import './assets/fonts/Redressed-Regular.ttf';

// console.log(style);

const button1 = document.getElementById('button1');
const logoEl = document.getElementById('logo');

button1.addEventListener('click', function buttonClicked() {
  const el = document.getElementById('header');
  el.innerHTML = 'Hey I have updated the code!';
  el.classList.add([style.header]);

  const listItems = ['Apple', 'Orange', 'Banana'];
  const ul = document.getElementById('shoppingList');
  _.forEach(listItems, function (item) {
    const tempEl = document.createElement('li');
    tempEl.innerHTML = item;
    ul.appendChild(tempEl);
  });
});

button1.classList.add([style.button]);
// button1.classList.add(['button']);

logoEl.src = logo;
