import {createElement} from '../framework/render.js';


function createTaskBoardTemplate() {
    return (
      
                `
                    <div class ="tasks_blok">
                    
                    </div>
                    
                `

      );
}


export default class TaskBoard {
  
  get template() {
    return createTaskBoardTemplate();
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
