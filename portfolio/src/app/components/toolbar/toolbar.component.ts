import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuActionId, NavigationType } from 'src/app/helpers/constant';
import { IMenu } from 'src/app/models/menu';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent{

  navigationType = NavigationType;

  menu: IMenu[] = [
    {
      "label": "About",
      "type": NavigationType.LABEL,
      "id": "abc",
      "actionId": MenuActionId.ABOUT
    },
    {
      "label": "Experience",
      "type": NavigationType.LABEL,
      "id": "abc",
      "actionId": MenuActionId.EXPERIENCE
    },
    {
      "label": "Work",
      "type": NavigationType.LABEL,
      "id": "abc",
      "actionId": MenuActionId.WORK
    },
    {
      "label": "Contact",
      "type": NavigationType.LABEL,
      "id": "abc",
      "actionId": MenuActionId.CONTACT
    },
    {
      "label": "Resume",
      "type": NavigationType.BUTTON,
      "id": "abc",
      "actionId": MenuActionId.RESUME
    }
  ];
  
  @Output() toolbarEmitter = new EventEmitter<number>();  

  onToolbarItemClicked(actionId: number) {
    // this.toolbarEmitter.emit(actionId);
  }
}
