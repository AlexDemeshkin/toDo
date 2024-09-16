import {createElement} from '../framework/render.js';


function createGarbageComponentTemplate() {
    return (
      
      `
              <div class="garbage_blok">
                  <ul class="list_garbage">
                    <label>Корзина</label>
                    <li>Сходить погулять</li>
                    <li>Прочитать войну и мир</li>
                    <button type="button">x Очистить</button>
                </ul>
              </div>
    `

      );
}


export default class GarbageComponent {
  getTemplate() {
    return createGarbageComponentTemplate();
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
