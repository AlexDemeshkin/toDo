import {createElement} from '../framework/render.js';


function createHeaderComponentTemplate() {
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


export default class HeaderComponent {
  getTemplate() {
    return createHeaderComponentTemplate();
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
