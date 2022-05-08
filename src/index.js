import "./assets/styles/style.scss";
import { renderLine } from "./functions";
import { changeLanguage } from "./functions";
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
} from "./vars.js";
import { ElementDOM } from "./element";

let isEN = true;

const content = {
  tittle: "RSS Виртуальная клавиатура",
  info: `Клавиатура создана в операционной системе Windows
  Для переключения языка используется комбинация: левый Alt + Shift`,
};

const tittle = new ElementDOM(document.body, "tittle", "h1", content.tittle);
const text = new ElementDOM(document.body, "", "p", content.info);
const app = new ElementDOM(document.body, "app");
const screen = new ElementDOM(app.node, "screen", "textarea");
const keyboard = new ElementDOM(app.node, "keyboard");

tittle.renderNode();
app.renderNode();
text.renderNode();
screen.renderNode();
keyboard.renderNode();

const lang =
  localStorage.getItem("language") && localStorage.getItem("language") === "RU"
    ? RU
    : EN;

const lineOneKeys = lang.lineOne.split("");
const lineTwoKeys = lang.lineTwo.split("");
const lineThreeKeys = lang.lineThree.split("");
const lineFourKeys = lang.lineFour.split("");

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
  const keys = document.querySelectorAll(".keyboard button");
  keys.forEach((el) => {
    if (el.dataset.key === event.key) {
      if (event.key === "Tab") {
        event.preventDefault();
        const area = document.querySelector("textarea");
        area.focus();
        area.value += "  ";
      }
      if (event.key === "Alt") {
        event.preventDefault();
      }
      if (event.key === "CapsLock") {
        el.classList.toggle("active");
      } else el.classList.add("active");
    }
    if (el.dataset.key === event.code) {
      el.classList.add("active");
    }
  });
};

document.onkeydown = (event) => {
  if (event.altKey && event.shiftKey) {
    isEN = !isEN;
    changeLanguage(isEN);
  }
  listener(event);
};

document.onkeyup = (event) => {
  const keys = document.querySelectorAll(".keyboard button");
  keys.forEach((el) => {
    if (el.dataset.key !== "CapsLock");
    {
      el.classList.remove("active");
    }
    if (event.key === "Alt") {
      event.preventDefault();
    }
  });
};
