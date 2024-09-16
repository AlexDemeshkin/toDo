import {createElement} from '../framework/render.js';


function createHeaderComponentTemplate() {
    return (
      
      `

       <div class="input">
                <label>Новая задача</label>
                <form>
                    <input type="text" value="Название задачи...">
                    <button type="button">+ Добавить</button>
                </form>
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
