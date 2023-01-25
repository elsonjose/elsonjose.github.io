import { ContentBlockType, ContentMessageType } from '../helpers/constant';

export interface ContentBlock {
  title: string;
  messages: string[];
  messageType: ContentMessageType;
  blocks: ContentBlockData[];
  type: ContentBlockType;
}

export interface ContentBlockData {
  title: string;
  url: string;
  description: string;
  icon: string;
  actionText: string;
}
