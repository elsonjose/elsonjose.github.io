import { Component, Input, OnInit } from '@angular/core';
import { NavigationType } from 'src/app/helpers/constant';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent{

  @Input() menuItem: Menu = {id:'',actionId:0,label:'',type:NavigationType.BUTTON};

}
