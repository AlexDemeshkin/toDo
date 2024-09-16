import HeaderComponent from './view/header-component.js';
import FormComponent from './view/form-component.js';
import BlogackComponent from './view/blogack-companent.js';
import ReadyComponent from './view/ready-component.js';
import InPrograssComponent from './view/in_progress-component.js';
import GarbageComponent from './view/garbage-component.js';
import {render, RenderPosition} from './framework/render.js';


const bodyContainer= document.querySelector('.header');
const formContainer= document.querySelector('.new_task');
const blogackContainer= document.querySelector('.blogack');
const inProgressContainer= document.querySelector('.in_progress');
const readyContainer= document.querySelector('.ready');
const garbageContainer= document.querySelector('.garbage');



render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);
render(new FormComponent(), formContainer, RenderPosition.AFTERBEGIN);
render(new BlogackComponent(), blogackContainer, RenderPosition.AFTERBEGIN);
render(new InPrograssComponent(), inProgressContainer, RenderPosition.AFTERBEGIN);
render(new ReadyComponent(), readyContainer, RenderPosition.AFTERBEGIN);
render(new GarbageComponent(), garbageContainer, RenderPosition.AFTERBEGIN);