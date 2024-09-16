import {createElement} from '../framework/render.js';


function createReadyComponentTemplate() {
    return (
      
      `

           <div class="ready_blok">
                    <ul class="list_ready">
                        <label>Готово</label>
                        <li>Позвонить маме</li>
                        <li>погладть кота</li>
                    </ul>
                </div>
    `

      );
}


export default class ReadyComponent {
  getTemplate() {
    return createReadyComponentTemplate();
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
