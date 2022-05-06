export class Key {
  constructor(content, className = "key") {
    this.content = content;
    this.node = document.createElement("button");
    this.node.className = className;
    this.node.innerText = this.content;
    this.node.dataset.key = this.content;
  }

  renderKey(parent) {
    parent.append(this.node);
  }
}
