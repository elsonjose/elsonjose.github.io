import { Component, Input, OnInit } from '@angular/core';
import { IMainProject } from 'src/app/models/main-project';

@Component({
  selector: 'app-main-project',
  templateUrl: './main-project.component.html',
  styleUrls: ['./main-project.component.scss'],
})
export class MainProjectComponent implements OnInit {
  @Input() work: IMainProject = {
    image: '',
    title: '',
    description: '',
    links: [],
  };
  @Input() index = 0;

  constructor() {}

  ngOnInit(): void {}
}
