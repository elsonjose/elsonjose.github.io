import { ToolbarAction } from '../helpers/constant';
import { Literal } from '../helpers/literals';

export interface ToolbarMenuModel {
  label: Literal;
  url: string;
  action: ToolbarAction;
}
