import { Component, OnInit } from '@angular/core';
import { IMainProject } from 'src/app/models/main-project';

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
        'Character Recognition Of Plates is a program designed to detect and recognize character from images.',
      image: 'assets/crop.svg',
      links: [
        {
          image: 'assets/github.svg',
          url: 'https://github.com/elsonjose/crop',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
