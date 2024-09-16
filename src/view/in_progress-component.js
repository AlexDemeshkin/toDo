import {createElement} from '../framework/render.js';


function createHeaderComponentTemplate() {
    return (
      
      `

        <div class="in_progress_blok">
            <ul class="list_in_progress">
                <label>В процессе</label>
                <li>Выпить смузи</li>
                <li>Попить воды</li>
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
