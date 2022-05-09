import { Key } from "./key.js";
const backspace = new Key("Backspace", "backspace");
const tab = new Key("Tab", "tab");
const del = new Key("DEL", "del", "Delete");
const caps = new Key("CapsLock", "caps");
if (!!localStorage.getItem("isCaps")) {
  caps.node.classList.add("active");
}
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

const EN = {
  lineOne: "`1234567890-=",
  lineTwo: "qwertyuiop[]\\",
  lineThree: "asdfghjkl;'",
  lineFour: "zxcvbnm,./",
};

const RU = {
  lineOne: "ё1234567890-=",
  lineTwo: "йцукенгшщзхъ\\",
  lineThree: "фывапролджэ",
  lineFour: "ячсмитьбю.",
};

const lineOne = document.createElement("div");
const lineTwo = document.createElement("div");
const lineThree = document.createElement("div");
const lineFour = document.createElement("div");
const lineFife = document.createElement("div");

lineOne.className =
  lineTwo.className =
  lineThree.className =
  lineFour.className =
  lineFife.className =
    "lineKeys";

export {
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
};
