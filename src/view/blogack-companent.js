import {createElement} from '../framework/render.js';


function createHeaderComponentTemplate() {
    return (
      
      `

       <div class="blogack_blok">
                    <ul class="list_blogack">
                        <label>Бэклог</label>
                        <li>Выучить JS</li>
                        <li>Выучить react</li>
                        <li>Сделать домашку</li>
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
