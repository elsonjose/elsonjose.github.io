import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuActionModel } from 'src/app/models/menu-action-model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  // The set of actions in the footer
  @Input() footerActions: MenuActionModel[]=[]

  @Output() footerEventEmitter = new EventEmitter<MenuActionModel>();

  onMenuItemClicked(menu: MenuActionModel){
    this.footerEventEmitter.emit(menu);
  }
}
