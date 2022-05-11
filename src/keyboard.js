import { Key } from './key';
import { PressKey } from './press-key';
import { EN, RU } from './vars';

export class Keyboard {
  constructor(parent) {
    this.parent = parent;
  }

  renderLine(arrayKeys, lineElement) {
    arrayKeys.forEach((el) => {
      const key = new Key(lineElement, el);
      key.renderNode();
      key.node.onclick = () => {
        PressKey.pressKey(key.node.innerHTML);
      };
    });
  }

  pressShift(isPress) {
    if (isPress) {
      Keyboard.clearLines();
      this.renderKeyboard(isPress);
    } else {
      Keyboard.clearLines();
      this.renderKeyboard();
    }
  }

  static clearLines(isShift = '') {
    const lines = document.querySelectorAll('.lineKeys');
    lines.forEach((el) => {
      el.remove();
    });
  }

  renderKeyboard(isShift = '') {
    const lang = localStorage.getItem('language')
      && localStorage.getItem('language') === 'RU'
      ? RU
      : EN;

    const isCaps = localStorage.getItem('isCaps')
      ? !!localStorage.getItem('isCaps')
      : false;

    const one = isShift ? 'lineOneShift' : 'lineOne';
    const two = isShift ? 'lineTwoShift' : 'lineTwo';
    const three = isShift ? 'lineThreeShift' : 'lineThree';
    const four = isShift ? 'lineFourShift' : 'lineFour';

    const lineOneKeys = isCaps
      ? lang[one].toUpperCase().split('')
      : lang[one].split('');
    const lineTwoKeys = isCaps
      ? lang[two].toUpperCase().split('')
      : lang[two].split('');
    const lineThreeKeys = isCaps
      ? lang[three].toUpperCase().split('')
      : lang[three].split('');
    const lineFourKeys = isCaps
      ? lang[four].toUpperCase().split('')
      : lang[four].split('');

    const lines = [];
    const lineOne = document.createElement('div');
    const lineTwo = document.createElement('div');
    const lineThree = document.createElement('div');
    const lineFour = document.createElement('div');
    const lineFife = document.createElement('div');
    lines.push(lineOne, lineTwo, lineThree, lineFour, lineFife);
    lines.forEach((el, i) => {
      el.className = 'lineKeys';
      el.id = i + 1;
    });

    const backspace = new Key(lineOne, 'Backspace', 'backspace');
    const tab = new Key(lineTwo, 'Tab', 'tab');
    const del = new Key(lineTwo, 'DEL', 'del', 'Delete');
    const caps = new Key(lineThree, 'CapsLock', 'caps');
    if (localStorage.getItem('isCaps')) {
      caps.node.classList.add('active');
    }
    const enter = new Key(lineThree, 'Enter', 'enter');
    const shiftR = new Key(lineFour, 'Shift', 'shift', 'ShiftRight');
    const shiftL = new Key(lineFour, 'Shift', 'shift', 'ShiftLeft');
    const arrowUp = new Key(lineFour, '▲', 'arrows', 'ArrowUp');
    const arrowL = new Key(lineFife, '◄', 'arrows', 'ArrowLeft');
    const arrowR = new Key(lineFife, '►', 'arrows', 'ArrowRight');
    const arrowDown = new Key(lineFife, '▼', 'arrows', 'ArrowDown');
    const ctrlR = new Key(lineFife, 'Ctrl', 'ctrl', 'ControlRight');
    const ctrlL = new Key(lineFife, 'Ctrl', 'ctrl', 'ControlLeft');
    const win = new Key(lineFife, 'Win', 'win', 'Meta');
    const altR = new Key(lineFife, 'Alt', 'alt', 'AltRight');
    const altL = new Key(lineFife, 'Alt', 'alt', 'AltLeft');
    const space = new Key(lineFife, '', 'space', 'Space');

    this.renderLine(lineOneKeys, lineOne);
    backspace.renderNode();
    backspace.node.onclick = PressKey.pressBackspace;

    tab.renderNode();
    tab.node.onclick = PressKey.pressTab;
    this.renderLine(lineTwoKeys, lineTwo);
    del.renderNode();
    del.node.onclick = PressKey.pressDel;

    caps.renderNode();
    caps.node.onclick = PressKey.pressCaps;
    this.renderLine(lineThreeKeys, lineThree);
    enter.renderNode();
    enter.node.onclick = PressKey.pressEnter;

    shiftL.renderNode();
    shiftL.node.onmousedown = () => {
      this.pressShift('press');
    };
    shiftL.node.onmouseup = () => {
      this.pressShift();
      PressKey.focus();
    };
    this.renderLine(lineFourKeys, lineFour);
    arrowUp.renderNode();
    arrowUp.node.onclick = () => {
      PressKey.pressArrow(arrowUp.node.innerText);
    };
    shiftR.renderNode();
    shiftR.node.onmousedown = () => {
      this.pressShift('press');
    };
    shiftR.node.onmouseup = () => {
      this.pressShift();
      PressKey.focus();
    };

    ctrlL.renderNode();
    win.renderNode();
    altL.renderNode();
    space.renderNode();
    space.node.onclick = PressKey.pressSpace;
    altR.renderNode();
    arrowL.renderNode();
    arrowL.node.onclick = () => {
      PressKey.pressArrow(arrowL.node.innerText);
    };
    arrowDown.renderNode();
    arrowDown.node.onclick = () => {
      PressKey.pressArrow(arrowDown.node.innerText);
    };
    arrowR.renderNode();
    arrowR.node.onclick = () => {
      PressKey.pressArrow(arrowR.node.innerText);
    };
    ctrlR.renderNode();

    this.parent.node.append(lineOne, lineTwo, lineThree, lineFour, lineFife);
  }
}
