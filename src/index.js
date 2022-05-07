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
screenContent.focus();

const backspace = new Key("Backspace", "backspace");
const tab = new Key("Tab", "tab");
const del = new Key("DEL", "del", "Delete");
const caps = new Key("CapsLock", "caps");
const enter = new Key("Enter", "enter");
const shiftR = new Key("Shift", "shift", "ShiftRight");
const shiftL = new Key("Shift", "shift", "ShiftLeft");
const arrowUp = new Key("▲", "arrows", "ArrowUp");
const arrowL = new Key("◄", "arrows", "ArrowLeft");
const arrowR = new Key("►", "arrows", "ArrowRight");
const arrowDown = new Key("▼", "arrows", "ArrowDown");
const ctrlR = new Key("Ctrl", "ctrl", "ControlRight");
const ctrlL = new Key("Ctrl", "ctrl", "ControlLeft");
const win = new Key("Win", "win", "Meta");
const altR = new Key("Alt", "alt", "AltRight");
const altL = new Key("Alt", "alt", "AltLeft");
const space = new Key("", "space", "Space");

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
    //for shift ctrl
    if (el.dataset.key === event.code) {
      el.classList.add("active");
    }
  });

  console.log(event.key);
  console.log(event.code);
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
