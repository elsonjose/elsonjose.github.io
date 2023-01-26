import { Component, Input } from '@angular/core';
import { MenuActionModel } from 'src/app/models/menu-action-model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {

  // The toolbar menu data
  @Input() toolbarMenuList: MenuActionModel[] = [];

  constructor() {}
}
