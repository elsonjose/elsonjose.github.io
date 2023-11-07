import { Component, OnInit } from '@angular/core';
import { ICompany } from 'src/app/models/company';
import { INotePoint } from 'src/app/models/note-point';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  companies = [
    'Experion Technologies',
    'IIM Indore',
    'Yelloberries Digital',
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
      institutionName: 'Indian Institute of Management',
      institutionUrl: 'https://www.iimidr.ac.in/',
      workDuration: 'May 2021 - August 2021',
      responsibilities: [
        'Work in a team of 2 to meet fast deadlines and rapid development changes to create 3 mobile apps.',
        'Design & develop critical distributive features using PaaS with the potential for scaling from scratch.',
        'Interact with clients and customers & performing all activities involved in the software life cycle.',
      ],
    },
    {
      role: 'Faculty',
      connector: '@',
      institutionName: 'Yelloberries Digital',
      institutionUrl: 'http://www.yelloberries.digital/',
      workDuration: 'July 2019 - August 2019',
      responsibilities: [
        'Teaching android development along with git & GitHub being a student at the time.',
        'Collaborate in small projects within the company.',
      ],
    },
  ];
  selectedCompany = this.companyInfo[this.selectedCompanyIndex];

  notePoints: INotePoint[] = [
    {
      title: 'Award of Excellence',
      subTitle: 'Experion Technologies - July 2022',
      note: 'An award given being the one of the best performer for the quarter by the head of the organization.',
    },
    {
      title: 'Spot Award',
      subTitle: 'Experion Technologies - February 2022',
      note: 'Awarded with a spot award of recognition within the first 3 months of joining for completing a complex import flow involving processing and debugging of raw data using serverless cloud services.',
    },
    {
      title: 'Recommendations',
      subTitle: '',
      note: 'View my recommendations in <a class="animate-underline" href="https://www.linkedin.com/in/elson-jose-457726147/" target="_blank">linkedIn</a> while associating and collaborating with various clients. ',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
