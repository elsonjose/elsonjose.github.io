import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  companies = ["Experion Technologies", "Freelance Dev","YellowBerry Technologies"]
  selectedCompany = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
