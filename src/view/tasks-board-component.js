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
  
  getTemplate() {
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
