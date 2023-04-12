import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-note-point',
  templateUrl: './note-point.component.html',
  styleUrls: ['./note-point.component.scss'],
})
export class NotePointComponent {
  @Input() title = '';
  @Input() subTitle = '';
  @Input() note = '';
}
