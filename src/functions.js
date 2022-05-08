import { Key } from "./key.js";
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
} from "./vars.js";

export const renderLine = (arrayKeys, lineElement) => {
  arrayKeys.forEach((el) => {
    const key = new Key(el);
    key.renderKey(lineElement);
  });
};

export const rerender = (lang) => {
  lineOne.innerHTML = "";
  lineTwo.innerHTML = "";
  lineThree.innerHTML = "";
  lineFour.innerHTML = "";

  renderLine(lang.lineOne.split(""), lineOne);
  backspace.renderKey(lineOne);

  tab.renderKey(lineTwo);
  renderLine(lang.lineTwo.split(""), lineTwo);
  del.renderKey(lineTwo);

  caps.renderKey(lineThree);
  renderLine(lang.lineThree.split(""), lineThree);
  enter.renderKey(lineThree);

  shiftL.renderKey(lineFour);
  renderLine(lang.lineFour.split(""), lineFour);
  arrowUp.renderKey(lineFour);
  shiftR.renderKey(lineFour);
};

export const changeLanguage = (isEN) => {
  if (!isEN) {
    localStorage.setItem("language", "RU");
    rerender(RU);
  } else {
    localStorage.setItem("language", "EN");
    rerender(EN);
  }
};
