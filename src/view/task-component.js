import {createElement} from '../framework/render.js';


function createTaskComponentTemplate(task) {
    const{status,title}=task;
    return (
      `     
                     <ul class="list_${status}">
            
        
        <li class="task--${status}">${title}</li>
         </ul>
        `

      );
}


export default class TaskComponent {
    constructor({ task } ) {
        this.task = task;
      }
    
      getTemplate() {
        return createTaskComponentTemplate(this.task);
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
