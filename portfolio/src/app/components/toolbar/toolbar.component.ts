import { Component, Input } from '@angular/core';
import { ToolbarMenuModel } from 'src/app/models/toolbar-menu-model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {

  // The toolbar menu data
  @Input() toolbarMenuList: ToolbarMenuModel[] = [];

  constructor() {}
}
