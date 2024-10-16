import { AbstractComponent } from "../framework/view/abstract-component.js";


function createTaskComponentTemplate(task) {
    const{status,title}=task;
    return (
`        
        <li class="task--${status}">${title}</li>

        `

      );
}

// function createTaskComponentTemplate() {
//     return (
//         `
//         <li>Название первой задачи</li>
//         `
//       );
// }


export default class TaskComponent extends AbstractComponent {
    constructor({ task } ) {
      super();
        this.task = task;
      }
    
      get template() {
        return createTaskComponentTemplate(this.task);
      }

}
