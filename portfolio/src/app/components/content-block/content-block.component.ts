import { Component, Input } from '@angular/core';
import { ContentBlockType } from 'src/app/helpers/constant';
import { ContentBlock } from 'src/app/models/content-block';

@Component({
  selector: 'app-content-block',
  templateUrl: './content-block.component.html',
  styleUrls: ['./content-block.component.scss'],
})
export class ContentBlockComponent {
  // The title of the content block
  @Input() contentData: ContentBlock = {
    title: '',
    messages: [],
    type: ContentBlockType.CARD,
    blocks: [],
  };

  blockType = ContentBlockType;

  constructor() {}
}
