import { Component, HostListener } from '@angular/core';
import { NavigationType, SideNavActionId } from './helpers/constant';
import { ISideNavItem } from './models/sidenav-item';
import { IMenu } from './models/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentWindowY = 0;
  isToolbarVisible = true;

  constructor() {}

  leftSideNavItems: ISideNavItem[] = [
    {
      icon: 'assets/linkedin.svg',
      actionId: SideNavActionId.LINKEDIN,
      label: 'linkedin',
    },
    {
      icon: 'assets/github.svg',
      actionId: SideNavActionId.GITHUB,
      label: 'GitHub',
    },
  ];

  onSmoothScroll(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  onToolbarEvent(menu: IMenu) {
    if (menu.type == NavigationType.LABEL) {
      this.onSmoothScroll(menu.id);
    } else {
    }
  }

  onScroll(event: any) {
    var previousWindowY = this.currentWindowY;
    this.currentWindowY = event.srcElement.scrollTop;

    var offset = this.currentWindowY - previousWindowY;

    if (offset > 0) {
      // scrolling down
      this.isToolbarVisible = false;
    } else {
      //scrolling up
      this.isToolbarVisible = true;
    }
  }
}
