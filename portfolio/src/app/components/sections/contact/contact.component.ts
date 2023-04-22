import { Component, OnInit } from '@angular/core';
import { MenuActionId, NavigationType } from 'src/app/helpers/constant';
import { IMenu } from 'src/app/models/menu';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  menu: IMenu = {
    label: 'Say Hi',
    type: NavigationType.BUTTON,
    id: '',
    actionId: MenuActionId.SAY_HELLO,
  };

  constructor() {}

  ngOnInit(): void {}
}
