import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuActionType } from 'src/app/helpers/constant';
import { MenuActionModel } from 'src/app/models/menu-action-model';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  // The toolbar menu data
  @Input() toolbarMenuList: MenuActionModel[] = [];

  @Output() toolbarEmitter = new EventEmitter<MenuActionModel>();

  onToolbarItemClicked(menu: MenuActionModel) {
    if (menu.actionType == MenuActionType.URL) {
      window.open(menu.url, '_blank');
    } else {
      this.toolbarEmitter.emit(menu);
    }
  }
}
