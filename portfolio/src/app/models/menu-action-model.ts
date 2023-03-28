import { MenuActionId, NavigationType } from "../helpers/constant";

export interface Menu {
  label: string;
  type: NavigationType;
  id: string;
  actionId: MenuActionId
}
