import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToolbarAction } from 'src/app/helpers/constant';
import { ToolbarMenuModel } from 'src/app/models/toolbar-menu-model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {

  // The toolbar menu data
  @Input() toolbarMenuList: ToolbarMenuModel[] = [];

  // The event emitter for toolbar actions
  @Output() toolbarActionEmitter = new EventEmitter<ToolbarAction>();

  constructor() {}
}
