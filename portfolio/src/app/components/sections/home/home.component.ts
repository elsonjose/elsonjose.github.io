import { Component, OnInit } from '@angular/core';
import { MenuActionId, NavigationType } from 'src/app/helpers/constant';
import { IMenu } from 'src/app/models/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  menu:IMenu ={
    id:"",
    actionId:MenuActionId.HIRE_ME,
    label:"Hire me!",
    type:NavigationType.BUTTON
  }

}