import { MenuActionId, NavigationType } from "../helpers/constant";

export interface IMenu {
  label: string;
  type: NavigationType;
  id: string;
  actionId: MenuActionId
}
