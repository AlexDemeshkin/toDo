import { createElement } from "../framework/render.js";

function createClearButtonComponentTemplate() {
  return `
                <button type="button">x Очистить</button>
        `;
}

export default class ClearButtonComponent{
  getTemplate() {
    return createClearButtonComponentTemplate();
  }
  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }
  removeElement() {
    this.element = null;
  }
}