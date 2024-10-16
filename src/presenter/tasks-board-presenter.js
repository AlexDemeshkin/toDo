import TasksListComponent from '../view/tasks-list-component.js'
import TaskComponent from '../view/task-component.js';
import SubmitTaskComponent from '../view/submitTask-component.js'
import TaskBoardComponent from '../view/tasks-board-component.js';
import ClearButtonComponent from "../view/button-clear.js";
import { Status} from '../const.js';
import {render} from '../framework/render.js';

export default class TasksBoardPresenter {
  #boardContainer=null;
  #tasksModel=null;

  #boardTasks=[];

  #tasksBoardComponent = new TaskBoardComponent()

 constructor({boardContainer, tasksModel}) {
   this.#boardContainer = boardContainer;
   this.#tasksModel=tasksModel;  
 }

init() {
    this.#boardTasks = [...this.#tasksModel.getTasks()];
  render(this.#tasksBoardComponent, this.#boardContainer);  

  for (let el in Status) {
          this.status_title = Status[el];
          const tasksListComponent = new TasksListComponent({status: Status[el]});

            render(tasksListComponent, this.#tasksBoardComponent.element);
          if (tasksListComponent.length===0){
            render(new SubmitTaskComponent(), tasksListComponent.element());
          }
          else{
            for (let j = 0; j <  this.#boardTasks.length; j++) {
              this.#renderTask(
                this.#boardTasks[j],
                tasksListComponent.element,
                this.status_title)
            }
          }
        }
      this.makeClearButton();
      }
      #renderTask(task, container, status_title) {
        const taskComponent = new TaskComponent({ task: task });
        if (task.status == status_title) {
          render(taskComponent, container);
        }
      }  
    makeClearButton() {
      const basketContainer = document.querySelector(`.list_${Status.BASKET}`);
      render(new ClearButtonComponent(), basketContainer);
  }
}
