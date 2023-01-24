import { Component } from '@angular/core';
import { ContentBlockType, ToolbarAction } from './helpers/constant';
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
    messages: [
      'A developer from India, keen to learn and work in diverse projects.',
      'I used to freelance during my college days as a mentor and developing projects which helped to cultivate crucial skills such as understanding the customer requirement, transforming a requirement to a solution and finally the fun part, the coding.',
      'I graduated with a Computer Science Degree in 2021. Currently I’m working for a software company in India as full-stack developer.',
    ],
    blocks: [
      {
        title: 'Road Map',
        url: '',
        description: 'Career path',
        icon: 'https://cdn-icons-png.flaticon.com/512/9217/9217013.png',
        type: ContentBlockType.CHIP,
      },
      {
        title: 'Achievements',
        url: '',
        description: 'Rewards and Recognition',
        icon: 'https://cdn-icons-png.flaticon.com/512/1435/1435715.png',
        type: ContentBlockType.CHIP,
      },
    ],
  };
}
