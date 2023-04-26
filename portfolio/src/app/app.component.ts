import { Component, HostListener } from '@angular/core';
import { SideNavActionId } from './helpers/constant';
import { ISideNavItem } from './models/sidenav-item';

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

  onToolbarEvent(actionId: number) {
    console.log(actionId);
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
