import "./assets/styles/style.scss";
import { Key } from "./key.js";

const renderLine = (arrayKeys, lineElement) => {
  arrayKeys.forEach((el) => {
    const key = new Key(el);
    key.renderKey(lineElement);
  });
};

const body = document.body;
const app = document.createElement("div");
const screenContent = document.createElement("textarea");
const screen = document.createElement("div");
const keyboard = document.createElement("div");
const lineOne = document.createElement("div");
const lineTwo = document.createElement("div");
const lineThree = document.createElement("div");
const lineFour = document.createElement("div");
const lineFife = document.createElement("div");

const lineOneKeys = "`1234567890-=".split("");
const lineTwoKeys = "qwertyuiop[]\\".split("");
const lineThreeKeys = "asdfghjkl;'".split("");
const lineFourKeys = "zxcvbnm,./".split("");
const lineFifeKeys = ["Ctrl", "Win", "Alt", "", "Alt", "Ctrl", "◄", "▼", "►"];

app.className = "app";
screen.className = "screen";
keyboard.className = "keyboard";
lineOne.className =
  lineTwo.className =
  lineThree.className =
  lineFour.className =
  lineFife.className =
    "lineKeys";

body.append(app);
app.append(screen, keyboard);
screen.append(screenContent);

const screenField = document.querySelector("textarea");
screenField.focus();

const backspace = new Key("Backspace", "backspace");
const tab = new Key("Tab", "tab");
const del = new Key("DEL", "del");
del.node.dataset.key = "Delete";
const caps = new Key("CapsLock", "caps");
const enter = new Key("Enter", "enter");
const shiftR = new Key("Shift", "shift");
const shiftL = new Key("Shift", "shift");
const arrowUp = new Key("▼", "arrows");

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

renderLine(lineFifeKeys, lineFife);

keyboard.append(lineOne, lineTwo, lineThree, lineFour, lineFife);

const keys = document.querySelectorAll(".keyboard button");

document.onkeydown = (event) => {
  keys.forEach((el) => {
    if (el.dataset.key === event.key) {
      el.classList.add("active");
    }
  });
  console.log(event.key);
};

document.onkeyup = () => {
  keys.forEach((el) => {
    el.classList.remove("active");
  });
};
