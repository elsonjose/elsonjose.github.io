import { Component } from '@angular/core';
import { ToolbarAction } from './helpers/constant';
import { Literal } from './helpers/literals';
import { ToolbarMenuModel } from './models/toolbar-menu-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // The toolbar data to be passed onto the component
  toolbarMenuList: ToolbarMenuModel[] = [
    {
      label: Literal.PROJECT,
      url: '/projects',
      action: ToolbarAction.PROJECT,
    },
    {
      label: Literal.BLOG,
      url: '/blogs',
      action: ToolbarAction.BLOG,
    },
  ];
}
