import { Component, OnInit } from '@angular/core';
import { ContactType } from 'src/app/helpers/constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  contactType = ContactType;

  onContactItemClicked(id: ContactType) {
    switch (id) {
      case ContactType.STACKOVERFLOW: {
        window.open(
          'https://stackoverflow.com/users/14055097/elson-jose',
          '_blank'
        );
        break;
      }
      case ContactType.GITHUB: {
        window.open('https://github.com/elsonjose', '_blank');
        break;
      }
      case ContactType.LINKEDIN: {
        window.open(
          'https://www.linkedin.com/in/elson-jose-457726147/',
          '_blank'
        );
        break;
      }
      case ContactType.MAIL: {
        navigator.clipboard.writeText('elsonjoseofficial@gmail.com');
        break;
      }
    }
  }
}
