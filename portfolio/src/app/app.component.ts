import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import {
  ContentBlockType,
  ContentMessageType,
  MenuActionType,
  MenuAction,
  BLOG_URL,
  DrawerAction,
} from './helpers/constant';
import { Literal } from './helpers/literals';
import { ContentBlock } from './models/content-block';
import { MenuActionModel } from './models/menu-action-model';

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
  toolbarMenuList: MenuActionModel[] = [
    {
      label: Literal.PROJECT,
      url: '#projects',
      action: MenuAction.NONE,
      actionType: MenuActionType.URL,
    },
    {
      label: Literal.BLOG,
      url: BLOG_URL,
      action: MenuAction.NONE,
      actionType: MenuActionType.URL,
    },
  ];

  aboutMeContent: ContentBlock = {
    title: 'About Me',
    messageType: ContentMessageType.TEXT,
    messages: [
      'A developer from India, keen to learn and work in diverse projects. I used to freelance during my college days as a mentor and developing projects which helped to cultivate crucial skills such as understanding the customer requirement, transforming a requirement to a solution and finally the fun part, the coding. I graduated with a Computer Science Degree in 2021. Currently I’m working for a software company in India as full-stack developer.',
    ],
    type: ContentBlockType.CHIP,
    blocks: [
      {
        title: 'Road Map',
        url: '',
        description: 'Career path',
        icon: 'https://cdn-icons-png.flaticon.com/512/9217/9217013.png',
        actionText: '',
        actionId: DrawerAction.ROAD_MAP,
      },
      {
        title: 'Achievements',
        url: '',
        description: 'Rewards and Recognition',
        icon: 'https://cdn-icons-png.flaticon.com/512/1435/1435715.png',
        actionText: '',
        actionId: DrawerAction.ACHIEVEMENTS,
      },
    ],
  };
  projectContent: ContentBlock = {
    title: 'Projects',
    messageType: ContentMessageType.TEXT,
    type: ContentBlockType.CARD,
    messages: [
      'I’m curious and often amazed my how tech works. I love automation (it saves a lot of of time if done correctly). In my leisure time you can find me trying to implement something  I learnt. You can find all my projects at <a class="url-text" href="https://github.com/elsonjose">github</a>. Here are a few of them.',
    ],
    blocks: [
      {
        title: 'LogOps',
        url: 'https://github.com/elsonjose/InstaSave',
        description:
          'A logging platform for easy log management and debugging.',
        icon: '',
        actionText: Literal.VIEW_IN_GITHUB,
        actionId: DrawerAction.NONE,
      },
      {
        title: 'SideHustle',
        url: 'https://github.com/elsonjose/InstaSave',
        description:
          'Sell your side projects, mentor or learn how to create projects',
        icon: '',
        actionText: Literal.VIEW_IN_GITHUB,
        actionId: DrawerAction.NONE,
      },
      {
        title: 'SideHustle',
        url: 'https://github.com/elsonjose/InstaSave',
        description:
          'Sell your side projects, mentor or learn how to create projects',
        icon: '',
        actionText: Literal.VIEW_IN_GITHUB,
        actionId: DrawerAction.NONE,
      },
      {
        title: 'SideHustle',
        url: 'https://github.com/elsonjose/InstaSave',
        description:
          'Sell your side projects, mentor or learn how to create projects',
        icon: '',
        actionText: Literal.VIEW_IN_GITHUB,
        actionId: DrawerAction.NONE,
      },
      {
        title: 'SideHustle',
        url: 'https://github.com/elsonjose/InstaSave',
        description:
          'Sell your side projects, mentor or learn how to create projects',
        icon: '',
        actionText: Literal.VIEW_IN_GITHUB,
        actionId: DrawerAction.NONE,
      },
      {
        title: 'SideHustle',
        url: 'https://github.com/elsonjose/InstaSave',
        description:
          'Sell your side projects, mentor or learn how to create projects',
        icon: '',
        actionText: Literal.VIEW_IN_GITHUB,
        actionId: DrawerAction.NONE,
      },
      {
        title: 'SideHustle',
        url: 'https://github.com/elsonjose/InstaSave',
        description:
          'Sell your side projects, mentor or learn how to create projects',
        icon: '',
        actionText: Literal.VIEW_IN_GITHUB,
        actionId: DrawerAction.NONE,
      },
    ],
  };
  blogContent: ContentBlock = {
    title: 'Blog',
    messageType: ContentMessageType.INNER_HTML,
    type: ContentBlockType.NONE,
    messages: [
      'Learning never ends and what better way learn tech than by blogging. Hence I’m starting a blog to cultivate research and refine my knowledge. You can visit <a class="url-text" href="' +
        BLOG_URL +
        '">Codex</a> to learn about the quick fixes I have used while learning.',
    ],
    blocks: [],
  };

  footerContent: MenuActionModel[] = [
    {
      label: Literal.ATTRIBUTIONS,
      actionType: MenuActionType.ACTION,
      url: '',
      action: MenuAction.ATTRIBUTION,
    },
    {
      label: Literal.CONTACT,
      actionType: MenuActionType.URL,
      url: 'header-contact',
      action: MenuAction.NONE,
    },
    {
      label: Literal.BACK_TO_TOP,
      actionType: MenuActionType.URL,
      url: 'top-view',
      action: MenuAction.NONE,
    },
  ];

  public onFooterEvent(menu: MenuActionModel) {
    if (menu.actionType == MenuActionType.ACTION) {
      this.onOpenDrawer(menu.action);
    } else if (menu.actionType == MenuActionType.URL) {
      console.log('actions ' + menu.url);
      this.scroller.scrollToAnchor(menu.url);
    }
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
