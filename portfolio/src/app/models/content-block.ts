import { ContentBlockType } from '../helpers/constant';

export interface ContentBlock {
  title: string;
  messages:string[]
  blocks: ContentBlockData[];
}

export interface ContentBlockData {
  title: string;
  url: string;
  description: string;
  icon: string;
  type: ContentBlockType;
}
