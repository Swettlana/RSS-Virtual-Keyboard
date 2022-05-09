import { Key } from './key';
import {
  backspace,
  tab,
  del,
  caps,
  enter,
  shiftR,
  shiftL,
  arrowUp,
  EN,
  RU,
  lineOne,
  lineTwo,
  lineThree,
  lineFour,
} from './vars';

export const renderLine = (arrayKeys, lineElement) => {
  arrayKeys.forEach((el) => {
    const key = new Key(el);
    key.renderKey(lineElement);
  });
};
export const changeCaps = (isCaps) => {
  const letters = document.querySelectorAll('.key');
  if (isCaps) {
    letters.forEach((el) => {
      const newText = el.innerText.toUpperCase();
      el.innerText = newText;
    });
  } else {
    letters.forEach((el) => {
      el.innerText = el.innerText.toLowerCase();
    });
  }
};
export const rerender = (lang, isShift = '') => {
  lineOne.innerHTML = '';
  lineTwo.innerHTML = '';
  lineThree.innerHTML = '';
  lineFour.innerHTML = '';

  if (isShift) {
    renderLine(lang.lineOneShift.split(''), lineOne);
    backspace.renderKey(lineOne);

    tab.renderKey(lineTwo);
    renderLine(lang.lineTwoShift.split(''), lineTwo);
    del.renderKey(lineTwo);

    caps.renderKey(lineThree);
    renderLine(lang.lineThreeShift.split(''), lineThree);
    enter.renderKey(lineThree);

    shiftL.renderKey(lineFour);
    renderLine(lang.lineFourShift.split(''), lineFour);
    arrowUp.renderKey(lineFour);
    shiftR.renderKey(lineFour);
  } else {
    renderLine(lang.lineOne.split(''), lineOne);
    backspace.renderKey(lineOne);

    tab.renderKey(lineTwo);
    renderLine(lang.lineTwo.split(''), lineTwo);
    del.renderKey(lineTwo);

    caps.renderKey(lineThree);
    renderLine(lang.lineThree.split(''), lineThree);
    enter.renderKey(lineThree);

    shiftL.renderKey(lineFour);
    renderLine(lang.lineFour.split(''), lineFour);
    arrowUp.renderKey(lineFour);
    shiftR.renderKey(lineFour);
  }
};

export const changeLanguage = (isEN) => {
  if (!isEN) {
    localStorage.setItem('language', 'RU');
    rerender(RU);
  } else {
    localStorage.setItem('language', 'EN');
    rerender(EN);
  }
};
