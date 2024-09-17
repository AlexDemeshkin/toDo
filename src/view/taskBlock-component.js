import {createElement} from '../framework/render.js';


function createTaskBlockTemplate() {
    return (
      
      `
              <div class="taskBlock">
                  <ul class="list_blok">
                    <label>Название блока</label>
                    <li>Название первой задачи</li>
                    <li>Название первой задачи</li>
                    <li>Название первой задачи</li>
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
