import HeaderComponent from './view/header-component.js';
import FormComponent from './view/form-component.js';
import TaskBlockComponent from './view/blogack-companent.js';

import {render, RenderPosition} from './framework/render.js';


const bodyContainer= document.querySelector('.header');
const formContainer= document.querySelector('.new_task');
const taskBlockContainer= document.querySelector('.blogack');




render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);
render(new FormComponent(), formContainer, RenderPosition.AFTERBEGIN);
for (var i =1;i<=4;i++){
    render(new TaskBlockComponent(), taskBlockContainer, RenderPosition.AFTEREND);
}
