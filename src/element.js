export class ElementDOM {
  constructor(parent, className, tag = "div", content = "") {
    this.node = document.createElement(tag);
    this.node.className = className;
    this.node.innerText = content;
    this.parent = parent;
  }

  renderNode() {
    this.parent.append(this.node);
  }
}
