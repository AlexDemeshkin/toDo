import { AbstractComponent } from "../framework/view/abstract-component.js";


function createFormComponentTemplate() {
  
    return (
      
      `

       <div class="input">
                <label>Новая задача</label>
                <form>
                    <input type="text" value="Название задачи...">
                    <button type="button">+ Добавить</button>
                </form>
            </div>

    `

      );
}


export default class FormComponent extends AbstractComponent {
  get template() {
    return createFormComponentTemplate();
  }



}
