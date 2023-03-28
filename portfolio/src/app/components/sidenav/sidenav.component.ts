import { Component, Input, OnInit } from '@angular/core';
import { SideNavItem } from 'src/app/models/sidenav-item';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  @Input() sideNavActions:SideNavItem[] = []

  

}
