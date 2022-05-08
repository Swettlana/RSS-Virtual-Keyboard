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
} from "./vars.js";

let isEN = true;

const body = document.body;
const tittle = document.createElement("h1");
tittle.className = "tittle";
tittle.innerText = "RSS Виртуальная клавиатура";
const text = document.createElement("p");
text.innerText = `Клавиатура создана в операционной системе Windows
Для переключения языка используется комбинация: левый Alt + Shift`;

const app = document.createElement("div");
const screenContent = document.createElement("textarea");
const screen = document.createElement("div");
const keyboard = document.createElement("div");
const lineFife = document.createElement("div");

const language =
  localStorage.getItem("language") && localStorage.getItem("language") === "RU"
    ? RU
    : EN;

const lineOneKeys = language.lineOne.split("");
const lineTwoKeys = language.lineTwo.split("");
const lineThreeKeys = language.lineThree.split("");
const lineFourKeys = language.lineFour.split("");

app.className = "app";
screen.className = "screen";
keyboard.className = "keyboard";
lineOne.className =
  lineTwo.className =
  lineThree.className =
  lineFour.className =
  lineFife.className =
    "lineKeys";

body.append(tittle, app, text);
app.append(screen, keyboard);
screen.append(screenContent);
screenContent.focus();

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

keyboard.append(lineOne, lineTwo, lineThree, lineFour, lineFife);

const keys = document.querySelectorAll(".keyboard button");

document.onkeydown = (event) => {
  if (event.altKey && event.shiftKey) {
    isEN = !isEN;
    changeLanguage(isEN);
  }
  keys.forEach((el) => {
    if (el.dataset.key === event.key) {
      if (event.key === "Tab") {
        event.preventDefault();
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

document.onkeyup = (event) => {
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
