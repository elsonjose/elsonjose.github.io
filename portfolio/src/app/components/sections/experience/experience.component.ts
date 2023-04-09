import { Component, OnInit } from '@angular/core';
import { ICompany } from 'src/app/models/company';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  companies = [
    'Experion Technologies',
    'IIM Indore',
    'YellowBerry Technologies',
  ];

  selectedCompanyIndex = 0;
  companyInfo: ICompany[] = [
    {
      role: 'Software Engineer',
      connector: '@',
      institutionName: 'Experion Technologies',
      institutionUrl: 'https://www.experionglobal.com/',
      workDuration: 'October 2021 - Present',
      responsibilities: [
        'Write performant and maintainable code for clients in Angular, .Net Core & Python.',
        'Assist with debugging, testing and deployments.',
        'Perform research and POCs.',
      ],
    },
    {
      role: 'Application Developer',
      connector: 'for',
      institutionName: 'IIM Indore',
      institutionUrl: 'https://www.iimidr.ac.in/',
      workDuration: 'May 2021 - August 2021',
      responsibilities: [
        'Work in a team of 2 to meet fast deadlines and rapid development changes to create 3 mobile apps.',
        'Design & develop critical distributive features only using PaaS with the potential for scaling from scratch.',
        'Interact with clients and customers & performing all activities involved in the software life cycle.',
      ],
    },
    {
      role: 'Faculty',
      connector: '@',
      institutionName: 'YellowBerry Technologies',
      institutionUrl: 'https://yellowberry.in/',
      workDuration: 'July 2019 - August 2019',
      responsibilities: [
        'Teaching android development along with git & GitHub being a student at the time.',
        'Collaborate with small projects within the company.',
      ],
    },
  ];
  selectedCompany = this.companyInfo[this.selectedCompanyIndex];

  constructor() {}

  ngOnInit(): void {}
}
