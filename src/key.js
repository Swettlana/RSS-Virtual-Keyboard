import { ElementDOM } from './element';

export class Key extends ElementDOM {
  constructor(parent, content, className = 'key', dataset = content) {
    super(parent, className, 'button', content);
    this.node.dataset.key = dataset;
  }
}
