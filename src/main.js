import HeaderComponent from './view/header-component.js';
import FormComponent from './view/form-component.js';
import TaskBlockComponent from './view/taskBlock-component.js';

import {render, RenderPosition} from './framework/render.js';


const bodyContainer= document.querySelector('.header');
const formContainer= document.querySelector('.new_task');
const taskBlockContainer= document.querySelector('.tasks');




render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);
render(new FormComponent(), formContainer, RenderPosition.AFTERBEGIN);
for (var i =1;i<=4;i++){
    render(new TaskBlockComponent(), taskBlockContainer, RenderPosition.AFTERBEGIN);
}
