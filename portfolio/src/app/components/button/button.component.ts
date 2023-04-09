import { Component, Input, OnInit } from '@angular/core';
import { NavigationType } from 'src/app/helpers/constant';
import { IMenu } from 'src/app/models/menu';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent{

  @Input() menuItem: IMenu = {id:'',actionId:0,label:'',type:NavigationType.BUTTON};

}
