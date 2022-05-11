import './assets/styles/style.scss';
import { ElementDOM } from './element';
import { Keyboard } from './keyboard';
import { PressKey } from './press-key';

const content = {
  tittle: 'RSS Виртуальная клавиатура',
  info: `Клавиатура создана в операционной системе Windows
  Для переключения языка используется комбинация: левый Alt + Shift`,
};

const tittle = new ElementDOM(document.body, '', 'h1', content.tittle);
const text = new ElementDOM(document.body, '', 'p', content.info);
const app = new ElementDOM(document.body, 'app');
const screen = new ElementDOM(app.node, 'screen', 'textarea');
const keyboard = new ElementDOM(app.node, 'keyboard');

tittle.renderNode();
app.renderNode();
text.renderNode();
screen.renderNode();
screen.node.focus();
keyboard.renderNode();

const keyboardContent = new Keyboard(keyboard);
keyboardContent.renderKeyboard();

document.onkeydown = (event) => {
  screen.node.focus();
  if (event.altKey && event.shiftKey) {
    Keyboard.clearLines();
    PressKey.changeLanguage();
    keyboardContent.renderKeyboard();
  }
  if (event.code === 'CapsLock') {
    PressKey.pressCaps();
  }
  if (event.key === 'Alt') {
    event.preventDefault();
  }
  if (event.code === 'Tab') {
    event.preventDefault();
    PressKey.pressTab();
  }
  if (event.key === 'Shift') {
    Keyboard.clearLines();
    keyboardContent.renderKeyboard('shift');
  }
  const keys = document.querySelectorAll('.keyboard button');
  keys.forEach((el) => {
    if (
      (el.dataset.key === event.key || el.dataset.key === event.code)
      && el.dataset.key !== 'CapsLock'
    ) {
      if (el.classList.contains('arrows')) {
        event.preventDefault();
        PressKey.pressArrow(el.innerText);
      }
      el.classList.add('active');
    }
  });
};

document.onkeyup = (event) => {
  if (event.key === 'Shift') {
    Keyboard.clearLines();
    keyboardContent.renderKeyboard();
  }
  const keys = document.querySelectorAll('.keyboard button');
  keys.forEach((el) => {
    if (el.innerText !== 'CapsLock') {
      el.classList.remove('active');
    }
  });
};
