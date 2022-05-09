import './assets/styles/style.scss';
import {
  renderLine, rerender, changeLanguage, changeCaps,
} from './functions';

import {
  backspace,
  tab,
  del,
  caps,
  enter,
  shiftR,
  shiftL,
  arrowUp,
  arrowL,
  arrowDown,
  arrowR,
  ctrlR,
  ctrlL,
  win,
  altR,
  altL,
  space,
  EN,
  RU,
  lineOne,
  lineTwo,
  lineThree,
  lineFour,
  lineFife,
} from './vars';
import { ElementDOM } from './element';

let isCaps = localStorage.getItem('isCaps')
  ? !!localStorage.getItem('isCaps')
  : false;
let isEN = true;

const content = {
  tittle: 'RSS Виртуальная клавиатура',
  info: `Клавиатура создана в операционной системе Windows
  Для переключения языка используется комбинация: левый Alt + Shift`,
};

const tittle = new ElementDOM(document.body, 'tittle', 'h1', content.tittle);
const text = new ElementDOM(document.body, '', 'p', content.info);
const app = new ElementDOM(document.body, 'app');
const screen = new ElementDOM(app.node, 'screen', 'textarea');
const keyboard = new ElementDOM(app.node, 'keyboard');

tittle.renderNode();
app.renderNode();
text.renderNode();
screen.renderNode();
keyboard.renderNode();

const lang = localStorage.getItem('language') && localStorage.getItem('language') === 'RU'
  ? RU
  : EN;

const lineOneKeys = isCaps
  ? lang.lineOne.toUpperCase().split('')
  : lang.lineOne.split('');
const lineTwoKeys = isCaps
  ? lang.lineTwo.toUpperCase().split('')
  : lang.lineTwo.split('');
const lineThreeKeys = isCaps
  ? lang.lineThree.toUpperCase().split('')
  : lang.lineThree.split('');
const lineFourKeys = isCaps
  ? lang.lineFour.toUpperCase().split('')
  : lang.lineFour.split('');

renderLine(lineOneKeys, lineOne);
backspace.renderKey(lineOne);

tab.renderKey(lineTwo);
renderLine(lineTwoKeys, lineTwo);
del.renderKey(lineTwo);

caps.renderKey(lineThree);
renderLine(lineThreeKeys, lineThree);
enter.renderKey(lineThree);

shiftL.renderKey(lineFour);
renderLine(lineFourKeys, lineFour);
arrowUp.renderKey(lineFour);
shiftR.renderKey(lineFour);

ctrlL.renderKey(lineFife);
win.renderKey(lineFife);
altL.renderKey(lineFife);
space.renderKey(lineFife);
altR.renderKey(lineFife);
arrowL.renderKey(lineFife);
arrowDown.renderKey(lineFife);
arrowR.renderKey(lineFife);
ctrlR.renderKey(lineFife);

keyboard.node.append(lineOne, lineTwo, lineThree, lineFour, lineFife);

const listener = (event) => {
  screen.node.focus();
  const keys = document.querySelectorAll('.keyboard button');
  keys.forEach((el) => {
    if (el.dataset.key === event.key) {
      if (event.key === 'Tab') {
        event.preventDefault();
        const area = document.querySelector('textarea');
        area.focus();
        area.value += '  ';
      }
      if (event.key === 'Alt') {
        event.preventDefault();
      }
      if (event.key === 'CapsLock') {
        if (isCaps) {
          isCaps = false;
          el.classList.remove('active');
          changeCaps(isCaps);
          localStorage.setItem('isCaps', '');
        } else {
          isCaps = true;
          el.classList.add('active');
          changeCaps(isCaps);
          localStorage.setItem('isCaps', isCaps);
        }
      } else {
        el.classList.add('active');
      }
    }
    if (el.dataset.key === event.code && el.dataset.key !== 'CapsLock') {
      el.classList.add('active');
    }
  });
};

document.onkeydown = (event) => {
  if (event.altKey && event.shiftKey) {
    isEN = !isEN;
    changeLanguage(isEN);
  } else if (event.key === 'Shift') {
    if (isEN) {
      rerender(EN, 'shift');
    } else rerender(RU, 'shift');
  } else listener(event);
};

document.onkeyup = (event) => {
  if (event.key === 'Alt') {
    event.preventDefault();
  } else if (event.key === 'Shift') {
    if (isEN) {
      rerender(EN);
    } else rerender(RU);
  } else if (event.key !== 'CapsLock') {
    const keys = document.querySelectorAll('.keyboard button');
    keys.forEach((el) => el.classList.remove('active'));
  }
};
