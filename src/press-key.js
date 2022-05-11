export class PressKey {
  static changeCaps(isCaps) {
    const letters = document.querySelectorAll(".key");
    if (isCaps) {
      letters.forEach((el) => {
        el.innerText = el.innerText.toUpperCase();
        el.dataset.key = el.dataset.key.toUpperCase();
      });
    } else {
      letters.forEach((el) => {
        el.innerText = el.innerText.toLowerCase();
        el.dataset.key = el.dataset.key.toLowerCase();
      });
    }
  }

  static focus() {
    const area = document.querySelector("textarea");
    area.focus();
    return area;
  }

  static pressKey(char) {
    const area = PressKey.focus();
    const posC = area.selectionStart;
    area.value = area.value.slice(0, posC) + char + area.value.slice(posC);
    area.selectionStart = area.selectionEnd = posC + 1;
  }

  static pressBackspace() {
    const area = PressKey.focus();
    const posC = area.selectionStart;
    area.value = area.value.slice(0, posC - 1) + area.value.slice(posC);
    area.selectionStart = area.selectionEnd = posC - 1;
  }

  static pressTab() {
    const area = PressKey.focus();
    const posC = area.selectionStart;
    area.value = `${area.value.slice(0, posC)}\t${area.value.slice(posC)}`;
    area.selectionStart = area.selectionEnd = posC + 1;
  }

  static pressEnter() {
    const area = PressKey.focus();
    const posC = area.selectionStart;
    area.value = `${area.value.slice(0, posC)}\n${area.value.slice(posC)}`;
    area.selectionStart = area.selectionEnd = posC + 1;
  }

  static pressDel() {
    const area = PressKey.focus();
    const posC = area.selectionStart;
    area.value = area.value.slice(0, posC) + area.value.slice(posC + 1);
    area.selectionStart = area.selectionEnd = posC;
  }

  static pressArrow(content) {
    const area = PressKey.focus();
    const posC = area.selectionStart;
    area.value = area.value.slice(0, posC) + content + area.value.slice(posC);
    area.selectionStart = area.selectionEnd = posC + 1;
  }

  static pressSpace() {
    const area = PressKey.focus();
    const posC = area.selectionStart;
    area.value = `${area.value.slice(0, posC)} ${area.value.slice(posC)}`;
    area.selectionStart = area.selectionEnd = posC + 1;
  }

  static pressCaps() {
    PressKey.focus();
    const key = document.querySelector(".caps");
    const isCaps = localStorage.getItem("isCaps")
      ? !!localStorage.getItem("isCaps")
      : false;
    if (isCaps) {
      key.classList.remove("active");
      PressKey.changeCaps();
      localStorage.setItem("isCaps", "");
    } else {
      key.classList.add("active");
      PressKey.changeCaps("true");
      localStorage.setItem("isCaps", "true");
    }
  }

  static changeLanguage() {
    const lang =
      localStorage.getItem("language") &&
      localStorage.getItem("language") === "RU"
        ? "RU"
        : "EN";
    if (lang === "RU") {
      localStorage.setItem("language", "EN");
    } else localStorage.setItem("language", "RU");
  }
}
