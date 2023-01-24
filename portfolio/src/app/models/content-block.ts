import { ContentBlockType } from '../helpers/constant';

export interface ContentBlock {
  title: string;
  messages:string[]
  blocks: ContentBlockData[];
  type: ContentBlockType;
}

export interface ContentBlockData {
  title: string;
  url: string;
  description: string;
  icon: string;
  actionText:string;
}
