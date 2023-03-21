export enum MenuAction {
  NONE = 0,
  ATTRIBUTION = 1, // change DrawerAction if this value is changed
  CONTACT = 2,
  BACK_TO_TOP = 3,
}

export enum ContentBlockType {
  CHIP = 1,
  CARD = 2,
  NONE = 3,
}

export enum ContentMessageType {
  TEXT = 1,
  INNER_HTML = 2,
}

export enum MenuActionType {
  URL = 1,
  ACTION = 2,
  ID = 3,
}

// Depends on MenuAction
export enum DrawerAction {
  ATTRIBUTION = 1,
  ROAD_MAP = 2,
  ACHIEVEMENTS = 3,
  NONE = 4,
}

export enum ContactType {
  STACKOVERFLOW = 1,
  GITHUB = 2,
  LINKEDIN = 3,
  MAIL = 4,
}

export const BLOG_URL = 'https://dev.to/elsonjose';
