import { Component } from '@angular/core';
import {
  ContentBlockType,
  ContentMessageType,
  ToolbarAction,
} from './helpers/constant';
import { Literal } from './helpers/literals';
import { ContentBlock } from './models/content-block';
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

  aboutMeContent: ContentBlock = {
    title: 'About Me',
    messageType: ContentMessageType.TEXT,
    messages: [
      'A developer from India, keen to learn and work in diverse projects.',
      'I used to freelance during my college days as a mentor and developing projects which helped to cultivate crucial skills such as understanding the customer requirement, transforming a requirement to a solution and finally the fun part, the coding.',
      'I graduated with a Computer Science Degree in 2021. Currently I’m working for a software company in India as full-stack developer.',
    ],
    type: ContentBlockType.CHIP,
    blocks: [
      {
        title: 'Road Map',
        url: '',
        description: 'Career path',
        icon: 'https://cdn-icons-png.flaticon.com/512/9217/9217013.png',
        actionText: '',
      },
      {
        title: 'Achievements',
        url: '',
        description: 'Rewards and Recognition',
        icon: 'https://cdn-icons-png.flaticon.com/512/1435/1435715.png',
        actionText: '',
      },
    ],
  };
  projectContent: ContentBlock = {
    title: 'Projects',
    messageType: ContentMessageType.TEXT,
    type: ContentBlockType.CARD,
    messages: [
      'I’m curious and often amazed my how tech works. I love automation (it saves a lot of of time if done correctly). In my leisure time you can find me trying to implement something  I learnt. You can find all my projects at <a href="https://github.com/elsonjose">github<a>. Here are a few of them.',
    ],
    blocks: [
      {
        title: 'LogOps',
        url: 'https://github.com/elsonjose/InstaSave',
        description:
          'A logging platform for easy log management and debugging.',
        icon: '',
        actionText: Literal.VIEW_IN_GITHUB,
      },
      {
        title: 'SideHustle',
        url: 'https://github.com/elsonjose/InstaSave',
        description:
          'Sell your side projects, mentor or learn how to create projects',
        icon: '',
        actionText: Literal.VIEW_IN_GITHUB,
      },
      {
        title: 'SideHustle',
        url: 'https://github.com/elsonjose/InstaSave',
        description:
          'Sell your side projects, mentor or learn how to create projects',
        icon: '',
        actionText: Literal.VIEW_IN_GITHUB,
      },
      {
        title: 'SideHustle',
        url: 'https://github.com/elsonjose/InstaSave',
        description:
          'Sell your side projects, mentor or learn how to create projects',
        icon: '',
        actionText: Literal.VIEW_IN_GITHUB,
      },
      {
        title: 'SideHustle',
        url: 'https://github.com/elsonjose/InstaSave',
        description:
          'Sell your side projects, mentor or learn how to create projects',
        icon: '',
        actionText: Literal.VIEW_IN_GITHUB,
      },
      {
        title: 'SideHustle',
        url: 'https://github.com/elsonjose/InstaSave',
        description:
          'Sell your side projects, mentor or learn how to create projects',
        icon: '',
        actionText: Literal.VIEW_IN_GITHUB,
      },
      {
        title: 'SideHustle',
        url: 'https://github.com/elsonjose/InstaSave',
        description:
          'Sell your side projects, mentor or learn how to create projects',
        icon: '',
        actionText: Literal.VIEW_IN_GITHUB,
      },
    ],
  };
  blogContent: ContentBlock = {
    title: 'Blog',
    messageType: ContentMessageType.INNER_HTML,
    type: ContentBlockType.NONE,
    messages: [
      'Learning never ends and what better way learn tech than by blogging. Hence I’m starting a blog to cultivate research and refine my knowledge. You can visit <a href="/codex">Codex</a> to learn about the quick fixes I have used while learning.',
    ],
    blocks: [],
  };
}
