import { changeCaps } from "./functions";
export class Key {
  constructor(content, className = "key", dataset = content) {
    this.content = content;
    this.node = document.createElement("button");
    this.node.className = className;
    this.node.innerText = this.content;
    this.node.dataset.key = dataset;
  }

  renderKey(parent) {
    parent.append(this.node);
    this.node.onclick = () => {
      const area = document.querySelector("textarea");
      area.focus();
      if (this.node.innerText === "Enter") {
        area.value += "\n";
      } else if (this.node.innerText === "Tab") {
        area.value += "  ";
      } else if (this.node.innerText === "") {
        area.value += " ";
      } else if (this.node.innerText === "Backspace") {
        const posC = area.selectionStart;
        area.value = area.value.slice(0, posC - 1) + area.value.slice(posC);
        area.selectionStart = area.selectionEnd = posC - 1;
      } else if (this.node.innerText === "DEL") {
        const posC = area.selectionStart;
        area.value = area.value.slice(0, posC) + area.value.slice(posC + 1);
        area.selectionStart = area.selectionEnd = posC;
      } else if (this.node.innerText === "CapsLock") {
        let isCaps = !!localStorage.getItem("isCaps") || false;
        if (isCaps) {
          isCaps = false;
          this.node.classList.remove("active");
          localStorage.setItem("isCaps", "");
          changeCaps(isCaps);
        } else {
          isCaps = true;
          localStorage.setItem("isCaps", isCaps);
          this.node.classList.add("active");
          changeCaps(isCaps);
        }
      } else if (
        this.node.innerText === "Ctrl" ||
        this.node.innerText === "Win" ||
        this.node.innerText === "Alt" ||
        this.node.innerText === "Shift"
      ) {
      } else {
        area.value += this.node.innerText;
      }
    };
  }
}
