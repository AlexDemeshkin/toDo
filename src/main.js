import HeaderComponent from './view/header-component.js';
import FormComponent from './view/form-component.js';
import TasksBoardPresenter from './presenter/tasks-board-presenter.js';
import TasksModel from "./model/task-model.js";

import {render, RenderPosition} from './framework/render.js';


const bodyContainer= document.querySelector('.header');
const formContainer= document.querySelector('.new_task');
const tasksBoardContainer= document.querySelector('.tasks');



const tasksModel = new TasksModel();
const tasksBoardPresenter = new TasksBoardPresenter({
 boardContainer: tasksBoardContainer,
 tasksModel,

});




render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);
render(new FormComponent(), formContainer, RenderPosition.AFTERBEGIN);



tasksBoardPresenter.init();
