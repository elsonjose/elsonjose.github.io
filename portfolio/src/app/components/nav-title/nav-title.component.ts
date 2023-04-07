import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-title',
  templateUrl: './nav-title.component.html',
  styleUrls: ['./nav-title.component.scss']
})
export class NavTitleComponent {

  @Input() title = "";
  @Input() index = "";
}