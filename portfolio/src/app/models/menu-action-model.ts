import { MenuActionType, MenuAction } from '../helpers/constant';
import { Literal } from '../helpers/literals';

export interface MenuActionModel {
  label: Literal;
  url: string;
  action: MenuAction;
  actionType: MenuActionType
}
