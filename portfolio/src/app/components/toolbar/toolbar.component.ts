import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuActionId, NavigationType } from 'src/app/helpers/constant';
import { IMenu } from 'src/app/models/menu';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  navigationType = NavigationType;

  menu: IMenu[] = [
    {
      label: 'About',
      type: NavigationType.LABEL,
      id: 'main-about',
      actionId: MenuActionId.ABOUT,
    },
    {
      label: 'Experience',
      type: NavigationType.LABEL,
      id: 'main-experience',
      actionId: MenuActionId.EXPERIENCE,
    },
    {
      label: 'Work',
      type: NavigationType.LABEL,
      id: 'main-work',
      actionId: MenuActionId.WORK,
    },
    {
      label: 'Contact',
      type: NavigationType.LABEL,
      id: 'main-contact',
      actionId: MenuActionId.CONTACT,
    },
    {
      label: 'Resume',
      type: NavigationType.BUTTON,
      id: '',
      actionId: MenuActionId.RESUME,
    },
  ];

  @Output() toolbarEmitter = new EventEmitter<IMenu>();

  onToolbarItemClicked(menu: IMenu) {
    this.toolbarEmitter.emit(menu);
  }
}
