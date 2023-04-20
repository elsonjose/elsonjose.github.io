import { Component, OnInit } from '@angular/core';
import { IMainProject } from 'src/app/models/main-project';
import { IMiniProject } from 'src/app/models/mini-project';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  mainProjects: IMainProject[] = [
    {
      title: 'CashFlow',
      description:
        'An android app for keeping track of credit and debit. The project is under development, but you can download stable and latest versions from GitHub.',
      image: 'assets/cashflow.svg',
      links: [
        {
          image: 'assets/github.svg',
          url: 'https://github.com/elsonjose/cashflow',
        },
      ],
    },
    {
      title: 'CROP',
      description:
        'Character Recognition Of Plates is a program designed to detect and recognize license plate characters from image.',
      image: 'assets/crop.svg',
      links: [
        {
          image: 'assets/github.svg',
          url: 'https://github.com/elsonjose/crop',
        },
      ],
    },
    {
      title: 'HomeStream',
      description:
        'A self hosted web app allowing users to stream videos from any device connected to the same router. This project is under development.',
      image: 'assets/homestream.svg',
      links: [
        {
          image: 'assets/github.svg',
          url: 'https://github.com/elsonjose/homestream',
        },
      ],
    },
  ];

  miniProjects: IMiniProject[] = [
    {
      title: 'InstaSave',
      description:
        'An android app allowing users to download and view instagram posts, stories & reels anonymously.',
      url: 'https://github.com/elsonjose/InstaSave',
    },
    {
      title: 'Swift',
      description:
        'An android app allowing users to download and view whatsapp status.',
      url: 'https://github.com/elsonjose/swift',
    },
    {
      title: 'BookMySlot',
      description:
        'A web app for users to find parking spots and allows management for the same.',
      url: 'https://github.com/elsonjose/Learnings/tree/master/BookMySlot',
    },
    {
      title: 'ExploreAr',
      description:
        'An android app for viewing Augmented Reality models.',
      url: 'https://github.com/elsonjose/Learnings/tree/master/ExploreAr',
    },
    {
      title: 'DeepFakeDetection',
      description:
        'A social media website where uploaded posts are checked for deep-fakes.',
      url: 'https://github.com/elsonjose/Learnings/tree/master/DeepFakeDetection',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
