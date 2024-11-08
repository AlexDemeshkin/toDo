import { AbstractComponent } from "../framework/view/abstract-component.js";

function createHeaderComponentTemplate() {
    return (      
      `
            <h>Список задач</h>
    `
      );
}

export default class HeaderComponent extends AbstractComponent {
  constructor() {
    super();
  }
  get template() {
    return createHeaderComponentTemplate();
  }

}
