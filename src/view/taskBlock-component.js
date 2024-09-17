import {createElement} from '../framework/render.js';


function createTaskBlockTemplate() {
    return (
      
      `
              <div class="taskBlock">
                  <ul class="list_blok">
                    <label>Корзина</label>
                    <li>Сходить погулять</li>
                    <li>Прочитать войну и мир</li>
                    <button type="button">x Очистить</button>
                </ul>
              </div>
    `

      );
}


export default class TaskBlock {
  getTemplate() {
    return createTaskBlockTemplate();
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
