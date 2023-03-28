import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import {
  ContentBlockType,
  ContentMessageType,
  MenuActionType,
  MenuAction,
  BLOG_URL,
  DrawerAction,
  SideNavActionId,
} from './helpers/constant';
import { Literal } from './helpers/literals';
import { Menu } from './models/menu';
import { SideNavItem } from './models/sidenav-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private scroller: ViewportScroller) {}

  // Specifies whether the drawer is open or not
  isDrawerOpen = false;

  // The toolbar data to be passed onto the component

  leftSideNavItems:SideNavItem[] = [
    {
      icon:"assets/linkedin.svg",
      actionId:SideNavActionId.LINKEDIN,
      label:"linkedin"
    },
    {
      icon:"assets/github.svg",
      actionId:SideNavActionId.GITHUB,
      label:"GitHub"
    }
  ]


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

  

  public onContentEvent(actionId: DrawerAction) {
    this.onOpenDrawer(actionId);
  }

  onOpenDrawer(actionId: number) {
    switch (actionId) {
      case DrawerAction.ATTRIBUTION: {
        this.isDrawerOpen = true;
        break;
      }
      case DrawerAction.ROAD_MAP: {
        this.isDrawerOpen = true;
        break;
      }
      case DrawerAction.ACHIEVEMENTS: {
        this.isDrawerOpen = true;
        break;
      }
    }
  }
}
