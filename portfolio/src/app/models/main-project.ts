export interface IMainProject {
  image: string;
  title: string;
  description: string;
  links: IMainProjectLink[];
}

export interface IMainProjectLink {
  image: string;
  url: string;
}
